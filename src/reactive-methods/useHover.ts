import { readable, type Readable } from "svelte/store";

export const useHover = (node: HTMLElement | null): Readable<boolean> => {
	if (!node) {
		return readable(false);
	}
	const isHovered = readable(false, (set) => {
		const onMouseEnter = () => set(true);
		const onMouseLeave = () => set(false);
		node.addEventListener("mouseenter", onMouseEnter);
		node.addEventListener("mouseleave", onMouseLeave);
		return () => {
			node.removeEventListener("mouseenter", onMouseEnter);
			node.removeEventListener("mouseleave", onMouseLeave);
		};
	});
	return isHovered;
};
