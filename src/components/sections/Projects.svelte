<script lang="ts">
	import { useInView } from "$/reactive-methods/useInView";
	import TechLabel from "../TechLabel.svelte";
	import Project from "../Project.svelte";
	import { useMediaQuery } from "$/reactive-methods/useMediaQuery";
	import { projectData, techLabels } from "$/utils/contents";
	import { Motion } from "svelte-motion";
	import NavigationButton from "../NavigationButton.svelte";

	const isMobile = useMediaQuery("(max-width: 640px)");

	const [stacksInView, stacksInViewAction] = useInView({ entry: $isMobile ? 0.1 : 0.4, exit: 0.1 });
	const [projLabelInView, projLabelInViewAction] = useInView({ entry: 0.4, exit: 0.1 });
	const [projBtnInView, projBtnInViewAction] = useInView({ entry: 0.4, exit: 0.1 });
</script>

<div class="flex flex-col gap-10 p-6 font-poppins text-neutral-900 sm:p-10 dark:text-[#d2eefa]">
	<!-- tech stack -->
	<Motion
		initial={{ opacity: 0, x: 200 }}
		animate={$stacksInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
		transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 15, ease: "easeIn" }}
		let:motion
	>
		<div use:stacksInViewAction use:motion class="flex w-full flex-col gap-2 sm:gap-4 lg:w-[60%]">
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
			animate={$projLabelInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
			transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 15, ease: "easeIn" }}
			let:motion
		>
			<div use:motion use:projLabelInViewAction class="text-left text-4xl font-[300]">Projects</div>
		</Motion>
		<div class="flex flex-col gap-4">
			{#each projectData.slice(0, 4) as project, i (project.title)}
				<Project key={i} data={project} />
			{/each}
		</div>
		<Motion
			initial={{ opacity: 0, x: 200 }}
			animate={$projBtnInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
			transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 15, ease: "easeIn" }}
			let:motion
		>
			<div use:motion use:projBtnInViewAction>
				<NavigationButton label="View all projects" href="/projects" />
			</div>
		</Motion>
	</div>
</div>
