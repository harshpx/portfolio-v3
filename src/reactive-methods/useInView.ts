import { writable, type Writable } from "svelte/store";

export type InViewAction = (node: HTMLElement) => { destroy: () => void } | void;
type InputParams = { entry?: number; exit?: number };

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

		let isInView = false;

		const observer = new IntersectionObserver(
			([entryObj]) => {
				if (!isInView && entryObj.intersectionRatio >= entry) {
					isInView = true;
					inView.set(true);
				} else if (isInView && entryObj.intersectionRatio <= exit) {
					isInView = false;
					inView.set(false);
				}
			},
			{
				threshold: buildThresholdList(entry, exit),
			},
		);

		observer.observe(node);

		return {
			destroy() {
				observer.unobserve(node);
			},
		};
	};

	return [inView, inViewAction];
};

const buildThresholdList = (entry: number, exit: number): number[] => {
	const thresholds = [0, exit, entry, 1];
	return Array.from(new Set(thresholds)).sort((a, b) => a - b);
};
