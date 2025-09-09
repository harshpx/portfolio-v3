import { writable, type Writable } from "svelte/store";
import { browser } from "$app/environment";

export type InViewAction = (node: HTMLElement) => { destroy: () => void } | void;
type InputParams = { entry?: number; exit?: number };

type ObserverEntry = {
	node: HTMLElement;
	store: Writable<boolean>;
	entry: number;
	exit: number;
};

let observer: IntersectionObserver | null = null;
// for O(1) lookup
const entries = new Map<HTMLElement, ObserverEntry>();

// Batch updates per animation frame
let pendingUpdates: (() => void)[] = [];
let rafScheduled = false;
const scheduleUpdate = (fn: () => void) => {
	pendingUpdates.push(fn);
	if (!rafScheduled) {
		rafScheduled = true;
		requestAnimationFrame(() => {
			pendingUpdates.forEach((f) => f());
			pendingUpdates = [];
			rafScheduled = false;
		});
	}
};

const createObserver = () => {
	if (!browser || observer) return;
	observer = new IntersectionObserver(
		(ioEntries) => {
			ioEntries.forEach(({ target, intersectionRatio }) => {
				const item = entries.get(target as HTMLElement);
				if (!item) return;

				const { store, entry, exit } = item;

				if (intersectionRatio >= entry) {
					scheduleUpdate(() => store.set(true));
				} else if (intersectionRatio <= exit) {
					scheduleUpdate(() => store.set(false));
				}
			});
		},
		{ threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] },
	);
};

export const useInView = ({ entry = 0.5, exit = 0.1 }: InputParams = {}): [
	Writable<boolean>,
	InViewAction,
] => {
	const inView: Writable<boolean> = writable(false);

	const inViewAction = (node: HTMLElement) => {
		if (typeof IntersectionObserver === "undefined") {
			inView.set(true);
			return;
		}

		entries.set(node, { node, store: inView, entry, exit });
		if (!observer) createObserver();
		observer!.observe(node);

		return {
			destroy() {
				if (!observer) return;
				observer.unobserve(node);
				entries.delete(node);
			},
		};
	};

	return [inView, inViewAction];
};
