import { writable } from "svelte/store";

export const useHover = () => {
	const hovered = writable(false);

	const hoverAction = (node: HTMLElement) => {
		const onMouseEnter = () => hovered.set(true);
		const onMouseLeave = () => hovered.set(false);

		node.addEventListener("mouseenter", onMouseEnter);
		node.addEventListener("mouseleave", onMouseLeave);

		return {
			destroy() {
				node.removeEventListener("mouseenter", onMouseEnter);
				node.removeEventListener("mouseleave", onMouseLeave);
			},
		};
	};

	return [hovered, hoverAction] as const;
};
