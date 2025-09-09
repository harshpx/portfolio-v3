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
const entries: ObserverEntry[] = [];

// Use a broad set of thresholds so all entry/exit combos are covered
// (0, 1, plus some granularity in between).
const thresholds = Array.from({ length: 20 }, (_, i) => i / 20);
thresholds.push(0, 1);

const createObserver = () => {
	if (!browser || observer) return;
	observer = new IntersectionObserver(
		(ioEntries) => {
			ioEntries.forEach(({ target, intersectionRatio }) => {
				const item = entries.find((e) => e.node === target);
				if (!item) return;

				const { store, entry, exit } = item;

				if (intersectionRatio >= entry) {
					store.set(true);
				} else if (intersectionRatio <= exit) {
					store.set(false);
				}
			});
		},
		{ threshold: thresholds },
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

		entries.push({ node, store: inView, entry, exit });
		if (!observer) createObserver();
		observer!.observe(node);

		return {
			destroy() {
				if (!observer) return;
				observer.unobserve(node);
				const i = entries.findIndex((e) => e.node === node);
				if (i !== -1) entries.splice(i, 1);
			},
		};
	};

	return [inView, inViewAction];
};
