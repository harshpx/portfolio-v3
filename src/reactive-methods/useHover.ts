import { writable } from "svelte/store";

export const useHover = () => {
	const hovered = writable(false);

	const hoverAction = (node: HTMLElement) => {
		const onMouseEnter = () => hovered.set(true);
		const onMouseLeave = () => hovered.set(false);

		node.addEventListener("pointerenter", onMouseEnter);
		node.addEventListener("pointerleave", onMouseLeave);

		return {
			destroy() {
				node.removeEventListener("pointerenter", onMouseEnter);
				node.removeEventListener("pointerleave", onMouseLeave);
			},
		};
	};

	return [hovered, hoverAction] as const;
};
