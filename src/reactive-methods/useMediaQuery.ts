import { readable, type Readable } from "svelte/store";

export const useMediaQuery = (query: string): Readable<boolean> => {
	const queryMatches = readable(false, (set) => {
		if (typeof window === "undefined") return;
		const mediaQuery = window.matchMedia(query);
		set(mediaQuery.matches);
		const listener = (event: MediaQueryListEvent) => {
			set(event.matches);
		};
		mediaQuery.addEventListener("change", listener);
		return () => mediaQuery.removeEventListener("change", listener);
	});
	return queryMatches;
};
