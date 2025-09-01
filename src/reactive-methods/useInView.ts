import { writable } from "svelte/store";

export const useInView = ({ entry = 0.5, exit = 0.1 }: { entry?: number; exit?: number } = {}) => {
	const inView = writable(false);

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

	return [inView, inViewAction] as const;
};

const buildThresholdList = (entry: number, exit: number) => {
	// ensure both entry & exit are included
	const steps = 20; // granularity
	const thresholds = [];
	for (let i = 0; i <= steps; i++) {
		thresholds.push(i / steps);
	}
	if (!thresholds.includes(entry)) thresholds.push(entry);
	if (!thresholds.includes(exit)) thresholds.push(exit);
	return thresholds.sort((a, b) => a - b);
};
