<script lang="ts">
	import ThemeSwitch from "./ThemeSwitch.svelte";
	import Logo from "./Logo.svelte";
	import { capitalizeFirstLetter } from "$/utils/commons";
	import { useMediaQuery } from "$/reactive-methods/useMediaQuery";
	import { goto, replaceState } from "$app/navigation";
	import { page } from "$app/state";

	const scrollToDiv = (id: string) => {
		if (page.url.pathname !== "/") {
			goto(`/#${id}`);
			return;
		}
		const element = document.getElementById(id);
		if (!element) return;
		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "center",
		});
		replaceState(`#${id}`, {});
	};

	const isMobile = useMediaQuery("(max-width: 640px)");

	export const sections: string[] = ["home", "about", "projects"];
	export const rootId: string | null = "homepage";
	const sectionIds = sections;
	let activeSection = $state(sectionIds[0]);

	let observer: IntersectionObserver | null = null;
	const initObserver = () => {
		// cleanup
		if (observer) {
			observer.disconnect();
			observer = null;
		}
		const root = (rootId ? document.getElementById(rootId) : null) ?? null;
		const targets = sectionIds
			.map((id) => document.getElementById(id))
			.filter((el): el is HTMLElement => !!el);

		observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

				if (visible) {
					activeSection = (visible.target as HTMLElement).id;
					replaceState(`#${activeSection}`, {});
				}
			},
			{
				root,
				threshold: [$isMobile ? 0.1 : 0.2],
			},
		);
		targets.forEach((t) => observer!.observe(t));
	};

	$effect(() => {
		if (page.url.pathname === "/") {
			initObserver();
		} else {
			activeSection = "";
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
	});
</script>

<div class="flex h-full w-full items-center justify-between px-6">
	<!-- left section -->
	<div class="flex w-1/3 justify-start">
		<Logo onclick={() => scrollToDiv("home")} />
	</div>
	<!-- center section -->
	<div class="flex w-1/3 justify-center">
		{#if page.url.pathname === "/"}
			<div class="flex items-center gap-4 text-black dark:text-white">
				{#each sections as section, index (index)}
					<div
						class={`
						relative font-poppins text-sm font-light sm:text-base
						${activeSection === section ? "text-black dark:text-[#86cae7]" : ""} 
					`}
					>
						<!-- button -->
						<button class="cursor-pointer hover:opacity-60" onclick={() => scrollToDiv(section)}>
							{capitalizeFirstLetter(section)}
						</button>
						<!-- underline -->
						<div
							class={`
            absolute bottom-0 h-[1px] w-full border-b border-black transition-opacity 
            duration-200 dark:border-[#86cae7]
            ${activeSection === section ? "opacity-100" : "opacity-0"}
          `}
						></div>
					</div>
				{/each}
			</div>
		{/if}
		{#if page.url.pathname === "/projects"}
			<div class="flex items-center gap-2 text-black dark:text-white">
				<span
					class="font-poppins text-base font-light text-nowrap text-black sm:text-lg dark:text-[#97cce3]"
				>
					Projects Archive
				</span>
			</div>
		{/if}
	</div>
	<!-- right button -->
	<div class="flex w-1/3 justify-end">
		<ThemeSwitch />
	</div>
</div>
