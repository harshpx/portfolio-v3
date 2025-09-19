<script lang="ts">
	import arrowLeft from "$/assets/icons/arrow-left.svg";
	import downloadSvg from "$/assets/icons/download.svg";
	import { useHover } from "$/reactive-methods/useHover";
	import { useMediaQuery } from "$/reactive-methods/useMediaQuery";
	import { goto } from "$app/navigation";
	import { inlineSvg } from "@svelte-put/inline-svg";
	import { onMount } from "svelte";
	import { Motion } from "svelte-motion";

	let showResume = $state(false);

	onMount(() => {
		let cls = setTimeout(() => {
			showResume = true;
		}, 600);

		return () => clearTimeout(cls);
	});

	const isMobile = useMediaQuery("(max-width: 640px)");
	const [backButtonHovered, backButtonHoverAction] = useHover();
</script>

<Motion
	initial={{ opacity: 0, scale: 0.6 }}
	animate={{ opacity: 1, scale: 1 }}
	transition={{ duration: 0.4, ease: "easeInOut" }}
	let:motion
>
	<div use:motion class="flex h-full w-full flex-col px-2 pb-2">
		<div
			class="
			flex w-full grow flex-col gap-1
			p-6 font-poppins
			text-neutral-900 sm:p-10 lg:p-14 dark:text-[#d2eefa]"
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
			<div class="flex w-full items-end justify-between">
				<span class="text-4xl font-[300] sm:text-5xl lg:text-6xl">Resume</span>
				{#if !$isMobile}
					<a
						href="/resume.pdf"
						download="harsh-resume.pdf"
						aria-label="download"
						class="flex items-center gap-2 rounded-full
						bg-neutral-900/10 px-3 py-2
						font-extralight dark:bg-[#d2eefa]/10"
					>
						<svg use:inlineSvg={downloadSvg} class="h-4 w-4 stroke-2" />
						<span>Download</span>
					</a>
				{:else}
					<a
						href="/resume.pdf"
						aria-label="download"
						class="flex items-center gap-2 rounded-full
						bg-neutral-900/10 p-3 font-extralight
						dark:bg-[#d2eefa]/10"
					>
						<svg use:inlineSvg={downloadSvg} class="h-4 w-4 stroke-2" />
					</a>
				{/if}
			</div>
			{#if showResume}
				<div class="mt-4 flex w-full grow overflow-hidden rounded-2xl lg:mt-8">
					<iframe src="/resume.pdf" title="resume" class=" w-full"></iframe>
				</div>
			{/if}
		</div>
	</div>
</Motion>
