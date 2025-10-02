import { goto, replaceState } from "$app/navigation";
import { page } from "$app/state";
import { useMediaQuery } from "$/reactive-methods/useMediaQuery";
import { get, writable } from "svelte/store";

export const navigateToMainAndScroll = (id: string) => {
	if (window.location.pathname !== "/") goto(`/#${id}`);
	else {
		const element = document.getElementById(id);
		if (!element) return;
		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "center",
		});
		replaceState(`#${id}`, {});
	}
};

export const sections: Map<string, string> = new Map([
	["home", "Home"],
	["about", "About"],
	["projects", "Projects"],
	["contact", "Contact"],
]);

const isMobile = useMediaQuery("(max-width: 640px)");

const rootId: string | null = "homepage";
const sectionIds = [...sections.keys()];

export const activeSection = writable(sectionIds[0]);
let observer: IntersectionObserver | null = null;

const initObserver = () => {
	// cleanup
	if (observer) {
		observer.disconnect();
		observer = null;
	}
	const root = (rootId ? document.getElementById(rootId) : null) ?? null;
	const targets = sectionIds.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);

	observer = new IntersectionObserver(
		(entries) => {
			const visible = entries
				.filter((e) => e.isIntersecting)
				.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

			if (visible) {
				activeSection.set((visible.target as HTMLElement).id);
				replaceState(`#${get(activeSection)}`, {});
			}
		},
		{
			root,
			threshold: [get(isMobile) ? 0.1 : 0.2],
		},
	);
	targets.forEach((t) => observer!.observe(t));
};

export const observerHandler = () => {
	if (page.url.pathname === "/") {
		initObserver();
	} else {
		activeSection.set("");
		if (observer) {
			observer.disconnect();
			observer = null;
		}
	}
	return () => {
		if (observer) {
			observer.disconnect();
			observer = null;
		}
	};
};
