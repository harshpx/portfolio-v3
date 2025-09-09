// src/reactive-methods/useInView.ts
import { writable, type Writable } from "svelte/store";
import { browser } from "$app/environment";

export type InViewAction = (node: HTMLElement) => { destroy: () => void } | void;
type InputParams = { entry?: number; exit?: number };

type Item = {
	store: Writable<boolean>;
	entry: number;
	exit: number;
	visible: boolean;
};

const registry = new Map<HTMLElement, Item>();

// Keep a superset of thresholds required by all registered nodes
let thresholds = new Set<number>([0, 1]);

let observer: IntersectionObserver | null = null;

const handle = (entries: IntersectionObserverEntry[]) => {
	for (const e of entries) {
		const node = e.target as HTMLElement;
		const item = registry.get(node);
		if (!item) continue;

		const ratio = e.intersectionRatio;

		if (!item.visible && ratio >= item.entry) {
			item.visible = true;
			item.store.set(true);
		} else if (item.visible && ratio <= item.exit) {
			item.visible = false;
			item.store.set(false);
		}
	}
};

const createObserver = () => {
	if (!browser) return null;
	observer = new IntersectionObserver(handle, {
		threshold: Array.from(thresholds).sort((a, b) => a - b),
	});
	// (Re)observe everything currently registered
	registry.forEach((_, node) => observer!.observe(node));
	return observer;
};

// If a new entry/exit is introduced, rebuild the observer with the larger threshold set
const ensureThresholds = (entry: number, exit: number) => {
	if (!browser) return;
	const sizeBefore = thresholds.size;
	thresholds.add(entry);
	thresholds.add(exit);
	const changed = thresholds.size !== sizeBefore;

	if (!observer) {
		createObserver();
		return;
	}
	if (changed) {
		const prev = observer;
		createObserver(); // creates a new observer with updated thresholds and re-observes nodes
		prev.disconnect();
	}
};

export const useInView = ({ entry = 0.5, exit = 0.1 }: InputParams = {}): [
	Writable<boolean>,
	InViewAction,
] => {
	const inView: Writable<boolean> = writable(false);

	const action = (node: HTMLElement) => {
		if (!browser) {
			// On the server: do nothing (avoids ReferenceError). The client will take over on hydrate.
			return;
		}

		// Make sure our global observer thresholds include this element's entry/exit
		ensureThresholds(entry, exit);

		// Register and observe
		registry.set(node, { store: inView, entry, exit, visible: false });
		if (!observer) {
			observer = createObserver();
		}

		observer!.observe(node);

		return {
			destroy() {
				if (!browser) return;
				if (observer) observer.unobserve(node);
				registry.delete(node);

				// Optional cleanup: if nothing is observed, reset to free memory and allow a fresh threshold set later
				if (registry.size === 0 && observer) {
					observer.disconnect();
					observer = null;
					thresholds = new Set<number>([0, 1]);
				}
			},
		};
	};

	return [inView, action];
};
