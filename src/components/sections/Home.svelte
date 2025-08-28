<script lang="ts">
	import { useHover } from "$/reactive-methods/useHover";
	import { useMediaQuery } from "$/reactive-methods/useMediaQuery";
	import { inlineSvg } from "@svelte-put/inline-svg";
	import { onMount } from "svelte";
	import { readable } from "svelte/store";
	import githubIconSvg from "$/assets/github.svg";
	import linkedinIconSvg from "$/assets/linkedin.svg";

	const isMobile = useMediaQuery("(max-width: 640px)");

	let githubIcon: HTMLAnchorElement | null = null;
	let isGithubHovered = readable(false);
	let linkedinIcon: HTMLAnchorElement | null = null;
	let isLinkedinHovered = readable(false);

	onMount(() => {
		if (githubIcon) {
			isGithubHovered = useHover(githubIcon);
		}
		if (linkedinIcon) {
			isLinkedinHovered = useHover(linkedinIcon);
		}
	});
</script>

<div
	class={`
    flex w-full flex-col items-center
    justify-center gap-10 p-10 text-neutral-900 sm:h-[calc(100vh-70px)] 
    sm:flex-row sm:gap-6 sm:p-20 dark:text-[#d2eefa]
  `}
>
	<div class="flex flex-col items-center justify-center sm:w-[45%] sm:items-start">
		<div class="text-center font-poppins text-5xl font-[300] sm:-ml-1 sm:text-left sm:text-6xl">
			Harsh Priye
		</div>
		<div class="mt-2 text-center font-poppins text-lg font-extralight sm:text-left sm:text-xl">
			Full Stack Developer
		</div>
		<div
			class="mt-4 text-center font-poppins text-sm font-extralight text-neutral-600 sm:mt-10 sm:text-left dark:text-[#d2eefab7]"
		>
			I build scalable, resiliant and beautiful apps
		</div>
		<div
			class="mt-2 text-center font-poppins text-sm font-extralight text-neutral-600 sm:text-left dark:text-[#d2eefab7]"
		>
			Based in New Delhi, India
		</div>
		<div class="mt-4 flex items-center justify-center gap-4 sm:mt-10">
			<a
				bind:this={githubIcon}
				href="https://www.github.com/harshpx"
				aria-label="github"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-2"
			>
				<svg
					use:inlineSvg={githubIconSvg}
					class="h-5 w-5 stroke-1 text-neutral-900 dark:text-[#d2eefa]"
				></svg>
				{#if !$isMobile}
					<span
						class={`overflow-hidden text-sm font-extralight transition-all duration-200 ${$isGithubHovered ? "w-[45px]" : "w-[0px]"}`}
					>
						GitHub
					</span>
				{/if}
			</a>
			<a
				bind:this={linkedinIcon}
				href="https://www.linkedin.com/in/harshpx"
				aria-label="linkedin"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-2"
			>
				<svg
					use:inlineSvg={linkedinIconSvg}
					class="h-5 w-5 stroke-1 text-neutral-900 dark:text-[#d2eefa]"
				></svg>
				{#if !$isMobile}
					<span
						class={`overflow-hidden text-sm font-extralight transition-all duration-200 ${$isLinkedinHovered ? "w-[55px]" : "w-[0px]"}`}
					>
						Linkedin
					</span>
				{/if}
			</a>
		</div>
	</div>
	{#if !$isMobile}
		<div
			class=" h-72 w-[0.5px] bg-gradient-to-b from-transparent via-neutral-900 to-transparent dark:via-[#d2eefa]"
		></div>
	{/if}
	<div class="sm:w-[45%]">
		<p class="text-center font-poppins text-sm leading-7 font-extralight sm:text-left">
			I&apos;m a software developer who builds modern, scalable and reliable applications that merge
			clean design with efficient engineering.
		</p>
	</div>
</div>
