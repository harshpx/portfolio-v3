<script lang="ts">
	import { useHover } from "$/reactive-methods/useHover";
	import { useMediaQuery } from "$/reactive-methods/useMediaQuery";
	import { inlineSvg } from "@svelte-put/inline-svg";
	import githubIconSvg from "$/assets/github.svg";
	import linkedinIconSvg from "$/assets/linkedin.svg";
	import { useInView } from "$/reactive-methods/useInView";

	const isMobile = useMediaQuery("(max-width: 640px)");

	const [gitHubHovered, githubHoveredAction] = useHover();
	const [linkedinHovered, linkedinHoveredAction] = useHover();

	const [inView, inViewAction] = useInView({ threshold: 1 });
</script>

<div
	use:inViewAction
	class={`
    flex w-full flex-col items-center
    justify-center gap-10 p-10 text-neutral-900 sm:h-[calc(100vh-70px)] sm:flex-row 
    sm:justify-between sm:gap-2 sm:p-20 dark:text-[#d2eefa]
  `}
>
	<div
		class={`
			flex flex-col items-center justify-center transition-all duration-500 sm:mb-40 sm:w-[45%] sm:items-start 
			${$inView ? "translate-y-0 opacity-100 sm:translate-x-0" : "-translete-y-20 opacity-0 sm:-translate-x-20"}
		`}
	>
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
				use:githubHoveredAction
				href="https://www.github.com/harshpx"
				aria-label="github"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-2"
			>
				<svg
					use:inlineSvg={githubIconSvg}
					class="h-5 w-5 stroke-2 text-neutral-900 dark:text-[#d2eefa]"
				></svg>
				{#if !$isMobile}
					<span
						class={`overflow-hidden text-sm font-extralight transition-all duration-200 ${$gitHubHovered ? "w-[45px]" : "w-[0px]"}`}
					>
						GitHub
					</span>
				{/if}
			</a>
			<a
				use:linkedinHoveredAction
				href="https://www.linkedin.com/in/harshpx"
				aria-label="linkedin"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-2"
			>
				<svg
					use:inlineSvg={linkedinIconSvg}
					class="h-5 w-5 stroke-2 text-neutral-900 dark:text-[#d2eefa]"
				></svg>
				{#if !$isMobile}
					<span
						class={`overflow-hidden text-sm font-extralight transition-all duration-200 ${$linkedinHovered ? "w-[55px]" : "w-[0px]"}`}
					>
						Linkedin
					</span>
				{/if}
			</a>
		</div>
	</div>
	{#if !$isMobile}
		<div
			class={`
				h-[0.5px] w-9/10 bg-gradient-to-b from-transparent via-neutral-900 to-transparent transition-all duration-500 sm:h-72
				sm:w-[0.5px] dark:via-[#d2eefa]
				${$inView ? "rotate-[20deg] opacity-100" : "rotate-0 opacity-0"}
			`}
		></div>
	{/if}
	<div
		class={`
			flex justify-center transition-all duration-500 sm:mt-60 sm:w-[45%] sm:justify-end
			${$inView ? "translate-y-0 opacity-100 sm:translate-x-0" : " translate-y-20 opacity-0 sm:translate-x-20"}
		`}
	>
		<p
			class="w-9/10 text-center font-poppins text-sm leading-8 font-extralight sm:w-full sm:text-left lg:w-5/6 xl:w-3/4"
		>
			I&apos;m a software developer who builds modern, scalable and reliable applications that merge
			clean design with efficient engineering.
			<br />
			<br />
			My work lies at the intersection of performance & design, creating experiences that are not only
			performant but also visually appealing.
		</p>
	</div>
</div>
