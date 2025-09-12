<script lang="ts">
	import { useMediaQuery } from "$/reactive-methods/useMediaQuery";
	import { inlineSvg } from "@svelte-put/inline-svg";
	import githubIconSvg from "$/assets/icons/github.svg";
	import linkedinIconSvg from "$/assets/icons/linkedin.svg";
	import fileIconSvg from "$/assets/icons/file.svg";
	import { Motion } from "svelte-motion";
	import { inview } from "svelte-inview";

	const isMobile = useMediaQuery("(max-width: 640px)");
	let inView: boolean;
</script>

<div
	use:inview={{ threshold: 0.4, unobserveOnEnter: false }}
	on:inview_change={(e) => (inView = e.detail.inView)}
	class="
    flex w-full grow flex-col items-center
    justify-center gap-10 p-10 text-neutral-900 sm:h-[calc(100vh-70px)] sm:flex-row
    sm:justify-between sm:gap-4 sm:p-20 lg:justify-center lg:p-32 xl:p-44 dark:text-[#d2eefa]
	"
>
	<!-- left div -->
	<Motion
		initial={{ opacity: 0, x: $isMobile ? 0 : -200, y: $isMobile ? -200 : 0 }}
		animate={inView
			? { opacity: 1, x: 0, y: 0 }
			: { opacity: 0, x: $isMobile ? 0 : -200, y: $isMobile ? -200 : 0 }}
		transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 10, ease: "easeIn" }}
		let:motion
	>
		<div
			use:motion
			class="flex flex-col items-center justify-center sm:mb-40 sm:w-[40%] sm:items-start"
		>
			<div class="text-center font-poppins text-5xl font-[300] sm:-ml-1 sm:text-left sm:text-6xl">
				Harsh Priye
			</div>
			<div class="mt-2 text-center font-poppins text-lg font-extralight sm:text-left sm:text-xl">
				Full Stack Developer
			</div>
			<div
				class="mt-4 text-center font-poppins text-sm font-extralight text-nowrap text-neutral-600
				sm:mt-10 sm:text-left sm:text-wrap dark:text-[#d2eefab7]"
			>
				I build scalable, resiliant and beautiful apps
			</div>
			<div
				class="mt-2 text-center font-poppins text-sm font-extralight text-neutral-600
				sm:text-left dark:text-[#d2eefab7]"
			>
				Based in <span class="font-[400] text-cyan-900 dark:text-cyan-400">New Delhi, India</span>
			</div>
			<div class="mt-10 flex flex-wrap items-center justify-start gap-1 sm:mt-10 sm:gap-2">
				<a
					href="https://www.github.com/harshpx"
					aria-label="github"
					target="_blank"
					rel="noopener noreferrer"
					class="
					flex items-center gap-2
					rounded-full bg-neutral-900/10 px-2 py-1.5 dark:bg-[#d2eefa]/10
				"
				>
					<svg
						use:inlineSvg={githubIconSvg}
						class="h-5 w-5 stroke-1 text-neutral-900 dark:text-[#d2eefa]"
					></svg>
					<span
						class="w-[45px] overflow-hidden text-sm font-extralight sm:transition-all sm:duration-200"
					>
						GitHub
					</span>
				</a>
				<a
					href="https://www.linkedin.com/in/harshpx"
					aria-label="linkedin"
					target="_blank"
					rel="noopener noreferrer"
					class={`
					flex items-center gap-2
					rounded-full bg-neutral-900/10 px-2 py-1.5 dark:bg-[#d2eefa]/10
				`}
				>
					<svg
						use:inlineSvg={linkedinIconSvg}
						class="h-5 w-5 stroke-1 text-neutral-900 dark:text-[#d2eefa]"
					></svg>
					<span
						class="w-[55px] overflow-hidden text-sm font-extralight sm:transition-all sm:duration-200"
					>
						Linkedin
					</span>
				</a>
				<a
					href="/resume.pdf"
					target="_self"
					aria-label="github"
					rel="noopener noreferrer"
					class={`
					flex items-center gap-2
					rounded-full bg-neutral-900/10 px-2 py-1.5 dark:bg-[#d2eefa]/10
				`}
				>
					<svg
						use:inlineSvg={fileIconSvg}
						class="h-5 w-5 stroke-1 text-neutral-900 dark:text-[#d2eefa]"
					></svg>
					<span
						class="w-[55px] overflow-hidden text-sm font-extralight sm:transition-all sm:duration-200"
					>
						Resume
					</span>
				</a>
			</div>
			{#if !$isMobile}
				<div
					class="mt-10 w-full text-center text-[14px] font-extralight text-neutral-900/70 sm:w-2/3 sm:text-left dark:text-[#d2eefa]/70"
				>
					This website is built with
					<span class="font-[400] text-cyan-700 dark:text-cyan-400">SvelteKit</span> &
					<span class="font-[400] text-cyan-700 dark:text-cyan-400">Tailwind</span>, hosted with
					<span class="font-[400] text-cyan-700 dark:text-cyan-400">Vercel</span> by yours truly.
				</div>
			{/if}
		</div>
	</Motion>
	<!-- divider div -->
	{#if !$isMobile}
		<Motion
			initial={{ opacity: 0, rotate: 0 }}
			animate={inView ? { opacity: 1, rotate: 10 } : { opacity: 0, rotate: 0 }}
			transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 10, ease: "easeInOut" }}
			let:motion
		>
			<div
				use:motion
				class="h-[0.5px] w-9/10 bg-gradient-to-b from-transparent via-neutral-900 to-transparent sm:h-72
				sm:w-[0.5px] dark:via-[#d2eefa]"
			></div>
		</Motion>
	{/if}
	<!-- right div -->
	<Motion
		initial={{ opacity: 0, x: $isMobile ? 0 : 200, y: $isMobile ? 200 : 0 }}
		animate={inView
			? { opacity: 1, x: 0, y: 0 }
			: { opacity: 0, x: $isMobile ? 0 : 200, y: $isMobile ? 200 : 0 }}
		transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 10, ease: "easeIn" }}
		let:motion
	>
		<div use:motion class="flex justify-center sm:mt-60 sm:w-[50%] sm:justify-end">
			<p
				class="
				flex w-9/10 flex-col gap-6 text-center font-poppins text-sm leading-7 font-extralight sm:w-full
				sm:text-justify lg:w-5/6 xl:w-3/4
			"
			>
				<span>
					I&apos;m a software developer who builds modern, scalable and reliable applications that
					merge clean design with efficient engineering.
				</span>
				<span class="hidden sm:block">
					My work lies at the intersection of performance & design, creating experiences that are
					not only performant but also visually appealing.
				</span>
			</p>
		</div>
	</Motion>
	{#if $isMobile}
		<Motion
			animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
			transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 10, ease: "easeInOut" }}
			let:motion
		>
			<div use:motion class="absolute bottom-5 left-0 flex w-full items-center justify-center">
				<div
					class="w-2/3 text-center font-poppins text-[10px] font-extralight text-neutral-900/70
				sm:w-2/3 sm:text-left dark:text-[#d2eefa]/70"
				>
					This website is built with
					<span class="font-[400] text-cyan-700 dark:text-cyan-400">SvelteKit</span>
					and
					<span class="font-[400] text-cyan-700 dark:text-cyan-400">Tailwind</span>,
					<br /> hosted with
					<span class="font-[400] text-cyan-700 dark:text-cyan-400">Vercel</span> by yours truly.
				</div>
			</div>
		</Motion>
	{/if}
</div>
