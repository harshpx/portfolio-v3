<script lang="ts">
	import { useInView } from "$/reactive-methods/useInView";
	import TechLabel from "../TechLabel.svelte";
	import Project from "../Project.svelte";
	import { useMediaQuery } from "$/reactive-methods/useMediaQuery";
	import { useHover } from "$/reactive-methods/useHover";
	import { inlineSvg } from "@svelte-put/inline-svg";
	import arrowUpRight from "$/assets/icons/arrow-up-right.svg";
	import { projectData } from "$/utils/contents";
	import { Motion } from "svelte-motion";
	import { inview } from "svelte-inview";

	const isMobile = useMediaQuery("(max-width: 640px)");
	let stacksInView: boolean = false;
	let projectLabelInView: boolean = false;

	const techLabels = [
		"Java",
		"JavaScript",
		"Typescript",
		"Bash",
		"SQL",
		"Spring Boot",
		"JPA",
		"MySQL",
		"MongoDB",
		"Node.js",
		"Express.js",
		"React.js",
		"Next.js",
		"Svelte",
		"Sveltekit",
		"React Native",
		"Expo",
		"Tailwind",
		"Shadcn UI",
		"Lit-element",
		"HTML",
		"CSS",
		"Git",
		"Docker",
		"Linux",
		"Github Actions",
		"Visual Studio Code",
	];

	const [resumeHovered, resumeHoveredAction] = useHover();
	const [resumeInView, resumeInViewAction] = useInView({
		entry: 0.4,
		exit: 0.1,
	});
</script>

<div class="flex flex-col gap-10 p-6 font-poppins text-neutral-900 sm:p-10 dark:text-[#d2eefa]">
	<!-- tech stack -->
	<Motion
		initial={{ opacity: 0, x: 200 }}
		animate={stacksInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
		transition={{ duration: 0.4, ease: "easeIn" }}
		let:motion
	>
		<div
			use:inview={{ threshold: $isMobile ? 0.1 : 0.4, unobserveOnEnter: false }}
			on:inview_change={(e) => (stacksInView = e.detail.inView)}
			use:motion
			class="flex w-full flex-col gap-2 sm:gap-4 lg:w-[60%]"
		>
			<div class="text-left text-4xl font-[300]">My Stack & Tools</div>
			<div class="flex flex-wrap gap-1">
				{#each techLabels as label (label)}
					<div>
						<TechLabel className="text-[14px] px-3 py-2" name={label} />
					</div>
				{/each}
			</div>
		</div>
	</Motion>
	<!-- projects -->
	<div class="flex flex-col gap-4">
		<Motion
			initial={{ opacity: 0, x: 200 }}
			animate={projectLabelInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
			transition={{ duration: 0.4, ease: "easeIn" }}
			let:motion
		>
			<div
				use:motion
				use:inview
				on:inview_change={(e) => (projectLabelInView = e.detail.inView)}
				class="text-left text-4xl font-[300]"
			>
				Projects
			</div>
		</Motion>
		<div class="flex flex-col gap-4">
			{#each projectData.slice(0, 4) as project, i (project.title)}
				<Project key={i} data={project} />
			{/each}
		</div>
		<a
			use:resumeHoveredAction
			use:resumeInViewAction
			class={`
			flex w-fit cursor-pointer items-center gap-0.5
			rounded-full bg-neutral-900/10 px-3 py-2 font-poppins
			font-light transition-transform duration-500 dark:bg-[#d2eefa]/10
			${$resumeInView ? "translate-x-0 opacity-100" : " translate-x-20 opacity-0"}
		`}
			href="/projects"
		>
			<span class="text-[14px]">Open full project archive</span>
			<svg
				use:inlineSvg={arrowUpRight}
				class={`
					h-4 w-4 text-neutral-900 transition-transform duration-300 dark:text-[#d2eefa]
					${$resumeHovered ? "stroke-3 sm:translate-x-1 sm:-translate-y-1" : "stroke-3 sm:stroke-2"}
				`}
			/>
		</a>
	</div>
</div>
