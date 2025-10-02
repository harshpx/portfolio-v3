<script lang="ts">
	import { inlineSvg } from "@svelte-put/inline-svg";
	import arrowLeft from "$/assets/icons/arrow-left.svg";
	import { useHover } from "$/reactive-methods/useHover";
	import Project from "$/components/Project.svelte";
	import { projectData } from "$/utils/contents";
	import Footer from "$/components/Footer.svelte";
	import { Motion } from "svelte-motion";
	import { activeSection, navigateToMainAndScroll } from "$/contexts/activeSection";

	const [backButtonHovered, backButtonHoverAction] = useHover();

	const currMainPageSection = JSON.parse(JSON.stringify($activeSection));
</script>

<Motion
	initial={{ opacity: 0, scale: 0.6 }}
	animate={{ opacity: 1, scale: 1 }}
	transition={{ duration: 0.4, ease: "easeInOut" }}
	let:motion
>
	<div use:motion class="flex h-full w-full flex-col overflow-x-hidden overflow-y-auto px-2 pb-2">
		<div
			class="
				flex w-full flex-col gap-1 p-6
				font-poppins text-neutral-900
				sm:p-10 lg:p-14 dark:text-[#d2eefa]
			"
		>
			<button
				use:backButtonHoverAction
				onclick={() => navigateToMainAndScroll(currMainPageSection)}
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
			<!-- <div class="mt-10 w-full text-center font-poppins text-base font-extralight italic">
				This page is under development. More projects will be added soon ... :&rpar;
			</div> -->
		</div>
		<Footer />
	</div>
</Motion>
