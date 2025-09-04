<script lang="ts">
	import ThemeSwitch from "./ThemeSwitch.svelte";
	import Logo from "./Logo.svelte";
	import { onMount } from "svelte";
	import { capitalizeFirstLetter } from "$/utils/commons";
	import { useMediaQuery } from "$/reactive-methods/useMediaQuery";

	const scrollToDiv = (id: string) => {
		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "center",
		});
	};

	const isMobile = useMediaQuery("(max-width: 640px)");

	export const sections: string[] = ["home", "about", "projects"];
	export let rootId: string | null = "homepage";
	const sectionIds = sections;
	let activeSection = sectionIds[0];

	onMount(() => {
		const root = (rootId ? document.getElementById(rootId) : null) ?? null;

		const targets = sectionIds
			.map((id) => document.getElementById(id))
			.filter((el): el is HTMLElement => !!el);

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

				if (visible) {
					activeSection = (visible.target as HTMLElement).id;
					console.log("Active section:", activeSection);
				}
			},
			{
				root,
				threshold: [$isMobile ? 0.1 : 0.3],
			},
		);
		targets.forEach((t) => observer.observe(t));
		return () => observer.disconnect();
	});
</script>

<div class="flex h-full w-full items-center justify-between px-6">
	<Logo onclick={() => scrollToDiv("home")} />
	<div class="flex items-center gap-4 text-black dark:text-white">
		{#each sections as section, index (index)}
			<button
				onclick={() => scrollToDiv(section)}
				class={`
        relative cursor-pointer font-poppins text-sm font-light
        hover:opacity-60 sm:text-base 
        ${activeSection === section ? "text-black dark:text-[#86cae7]" : ""} 
      `}
			>
				{capitalizeFirstLetter(section)}
				<div
					class={`
            absolute bottom-0 h-[1px] w-full border-b border-black transition-opacity 
            duration-200 dark:border-[#86cae7]
            ${activeSection === section ? "opacity-100" : "opacity-0"}
          `}
				></div>
			</button>
		{/each}
	</div>
	<ThemeSwitch />
</div>
