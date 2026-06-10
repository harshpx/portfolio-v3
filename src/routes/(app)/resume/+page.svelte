<script lang="ts">
	import arrowLeft from "$/assets/icons/arrow-left.svg";
	import { useHover } from "$/reactive-methods/useHover";
	import { inlineSvg } from "@svelte-put/inline-svg";
	import { Motion } from "svelte-motion";
	import { activeSection, navigateToMainAndScroll } from "$/contexts/activeSection";
	import Resume from "$/components/Resume.svelte";
	import { resumeData_backend as resumeData } from "$/utils/data/resumes";
	import PrintDownload from "$/components/PrintDownload.svelte";

	let resumeRef: HTMLDivElement;

	const [backButtonHovered, backButtonHoverAction] = useHover();

	const currMainPageSection = JSON.parse(JSON.stringify($activeSection));
</script>

<Motion
	initial={{ opacity: 0, scale: 0.6 }}
	animate={{ opacity: 1, scale: 1 }}
	transition={{ duration: 0.4, ease: "easeInOut" }}
	let:motion
>
	<div use:motion class="flex h-full w-full flex-col px-2 pb-0">
		<div
			class="
			flex max-h-full w-full flex-col gap-1
			p-4 font-poppins
			text-neutral-900 sm:p-10 sm:pb-4 lg:p-14 lg:pb-4 dark:text-[#d2eefa]"
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
			<div class="mb-4 flex w-full items-end justify-between">
				<span class="text-4xl font-[300] sm:text-5xl lg:text-6xl">Resume</span>
				<PrintDownload componentRef={resumeRef} />
			</div>
			<div bind:this={resumeRef} class="flex w-full max-w-[210mm] min-w-0 grow overflow-auto rounded-xl">
				<Resume {resumeData} />
			</div>
		</div>
	</div>
</Motion>
