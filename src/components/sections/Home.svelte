<script lang="ts">
	import { useHover } from "$/reactive-methods/useHover";
	import { useMediaQuery } from "$/reactive-methods/useMediaQuery";
	import { inlineSvg } from "@svelte-put/inline-svg";
	import githubIconSvg from "$/assets/icons/github.svg";
	import linkedinIconSvg from "$/assets/icons/linkedin.svg";
	import fileIconSvg from "$/assets/icons/file.svg";
	import { useInView } from "$/reactive-methods/useInView";

	const isMobile = useMediaQuery("(max-width: 640px)");

	const [gitHubHovered, githubHoveredAction] = useHover();
	const [linkedinHovered, linkedinHoveredAction] = useHover();
	const [resumeHovered, resumeHoveredAction] = useHover();

	const [inView, inViewAction] = useInView({ entry: 0.5, exit: 0.2 });
</script>

<div
	use:inViewAction
	class={`
    flex w-full flex-col items-center
    justify-center gap-10 p-10 text-neutral-900 sm:h-[calc(100vh-70px)] sm:flex-row 
    sm:justify-between sm:gap-4 sm:p-20 lg:justify-center lg:p-32 xl:p-44 dark:text-[#d2eefa]
  `}
>
	<div
		class={`
			flex flex-col items-center justify-center transition-all duration-500 sm:mb-40 sm:w-[40%] sm:items-start 
			${$inView ? "translate-x-0 translate-y-0 opacity-100" : "-translate-y-40 opacity-0 sm:-translate-x-40"}
		`}
	>
		<div class="text-center font-poppins text-5xl font-[300] sm:-ml-1 sm:text-left sm:text-6xl">
			Harsh Priye
		</div>
		<div class="mt-2 text-center font-poppins text-lg font-extralight sm:text-left sm:text-xl">
			Full Stack Developer
		</div>
		<div
			class={`
				mt-4 text-center font-poppins text-sm font-extralight text-nowrap text-neutral-600 transition-all 
				duration-500 sm:mt-10 sm:text-left sm:text-wrap dark:text-[#d2eefab7]
				${$inView ? "translate-y-0 opacity-100 sm:translate-x-0" : "-translate-y-10 opacity-0 sm:-translate-x-10"}
			`}
		>
			I build scalable, resiliant and beautiful apps
		</div>
		<div
			class={`
				mt-2 text-center font-poppins text-sm font-extralight text-neutral-600 
				transition-all duration-500 sm:text-left dark:text-[#d2eefab7]
				${$inView ? "translate-y-0 opacity-100 sm:translate-x-0" : "-translate-y-10 opacity-0 sm:-translate-x-10"}
			`}
		>
			Based in <span class="underline">New Delhi, India</span>
		</div>
		<div
			class={`
			mt-10 flex items-center justify-center gap-1 transition-all duration-500 sm:mt-10 sm:gap-4
			${$inView ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}
		`}
		>
			<a
				use:githubHoveredAction
				href="https://www.github.com/harshpx"
				aria-label="github"
				target="_blank"
				rel="noopener noreferrer"
				class={`
					flex items-center ${$gitHubHovered || $isMobile ? "gap-2" : "gap-0"} 
					rounded-full bg-neutral-900/10 px-2 py-1.5 dark:bg-[#d2eefa]/10
				`}
			>
				<svg
					use:inlineSvg={githubIconSvg}
					class="h-5 w-5 stroke-1 text-neutral-900 dark:text-[#d2eefa]"
				></svg>
				<span
					class={`overflow-hidden text-sm font-extralight sm:transition-transform sm:duration-200 ${$gitHubHovered || $isMobile ? "w-[45px]" : "w-[0px]"}`}
				>
					GitHub
				</span>
			</a>
			<a
				use:linkedinHoveredAction
				href="https://www.linkedin.com/in/harshpx"
				aria-label="linkedin"
				target="_blank"
				rel="noopener noreferrer"
				class={`
					flex items-center ${$linkedinHovered || $isMobile ? "gap-2" : "gap-0"} 
					rounded-full bg-neutral-900/10 px-2 py-1.5 dark:bg-[#d2eefa]/10
				`}
			>
				<svg
					use:inlineSvg={linkedinIconSvg}
					class="h-5 w-5 stroke-1 text-neutral-900 dark:text-[#d2eefa]"
				></svg>
				<span
					class={`overflow-hidden text-sm font-extralight sm:transition-transform sm:duration-200 ${$linkedinHovered || $isMobile ? "w-[55px]" : "w-[0px]"}`}
				>
					Linkedin
				</span>
			</a>
			<a
				use:resumeHoveredAction
				href="/resume.pdf"
				target="_self"
				aria-label="github"
				rel="noopener noreferrer"
				class={`
					flex items-center ${$resumeHovered || $isMobile ? "gap-2" : "gap-0"} 
					rounded-full bg-neutral-900/10 px-2 py-1.5 dark:bg-[#d2eefa]/10
				`}
			>
				<svg
					use:inlineSvg={fileIconSvg}
					class="h-5 w-5 stroke-1 text-neutral-900 dark:text-[#d2eefa]"
				></svg>
				<span
					class={`overflow-hidden text-sm font-extralight sm:transition-transform sm:duration-200 ${$resumeHovered || $isMobile ? "w-[55px]" : "w-[0px]"}`}
				>
					Resume
				</span>
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
			flex justify-center transition-all duration-500 sm:mt-60 sm:w-[50%] sm:justify-end
			${$inView ? "translate-x-0 translate-y-0 opacity-100" : "translate-y-40 opacity-0 sm:translate-x-40"}
		`}
	>
		<p
			class="f
				flex w-9/10 flex-col gap-6 text-center font-poppins text-sm leading-7 font-extralight sm:w-full
				sm:text-justify lg:w-5/6 xl:w-3/4
			"
		>
			<span>
				I&apos;m a software developer who builds modern, scalable and reliable applications that
				merge clean design with efficient engineering.
			</span>
			<span
				class={`
					hidden transition-transform duration-500 sm:block
					${$inView ? "translate-x-0 translate-y-0 opacity-100" : "translate-x-40 translate-y-40 opacity-0"}
				`}
			>
				My work lies at the intersection of performance & design, creating experiences that are not
				only performant but also visually appealing.
			</span>
		</p>
	</div>
</div>
