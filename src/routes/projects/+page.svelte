<script lang="ts">
	import { goto } from "$app/navigation";
	import { inlineSvg } from "@svelte-put/inline-svg";
	import arrowLeft from "$/assets/icons/arrow-left.svg";
	import { useHover } from "$/reactive-methods/useHover";
	import Project from "$/components/Project.svelte";
	import { projectData } from "$/utils/contents";
	import Footer from "$/components/Footer.svelte";

	const [backButtonHovered, backButtonHoverAction] = useHover();
</script>

<div
	class="
    flex h-full w-full flex-col gap-1 overflow-x-hidden overflow-y-auto p-6
    font-poppins text-neutral-900
    sm:p-10 lg:p-20 dark:text-[#d2eefa]
  "
>
	<button
		use:backButtonHoverAction
		onclick={() => goto("/")}
		class="flex w-fit cursor-pointer items-center gap-1 text-base font-light text-cyan-700 sm:text-lg lg:text-xl dark:text-cyan-400"
	>
		<svg
			use:inlineSvg={arrowLeft}
			class={`
					h-4 w-4 stroke-3 text-cyan-700 transition-transform duration-300 dark:text-cyan-400
					${$backButtonHovered ? "-translate-x-2" : ""}
				`}
		/>
		<span> Harsh Priye</span>
	</button>
	<div class="text-4xl font-[300] sm:text-5xl lg:text-6xl">All Projects</div>
	<div class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
		{#each projectData as project, i (project.title)}
			<Project key={i} data={project} asListItem />
		{/each}
	</div>
	<div class="mt-10 w-full">
		<Footer />
	</div>
</div>
