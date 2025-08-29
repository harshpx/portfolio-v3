import { writable } from "svelte/store";

export const useInView = (options: IntersectionObserverInit = {}) => {
	const inView = writable(false);

	const inViewAction = (node: HTMLElement) => {
		if (typeof IntersectionObserver === "undefined") {
			inView.set(true);
			return;
		}

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				inView.set(entry.isIntersecting);
			});
		}, options);

		observer.observe(node);

		return {
			destroy() {
				observer.unobserve(node);
			},
		};
	};

	return [inView, inViewAction] as const;
};
