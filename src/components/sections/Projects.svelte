<script>
	import { useInView } from "$/reactive-methods/useInView";
	import TechLabel from "../TechLabel.svelte";
	const [stackInView, stackInViewAction] = useInView({ entry: 0.4, exit: 0.1 });

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
		"HTML",
		"CSS",
		"Git",
		"Docker",
	];
</script>

<div class="flex flex-col gap-10 p-6 font-poppins text-neutral-900 sm:p-10 dark:text-[#d2eefa]">
	<!-- tech stack -->
	<div
		use:stackInViewAction
		class={`
			flex w-full flex-col gap-2 transition-transform duration-500 sm:gap-4 lg:w-1/2 
			${$stackInView ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"}
		`}
	>
		<div class="text-left text-4xl font-[300] transition-transform duration-500">My Stack</div>
		<div class="flex flex-wrap gap-1">
			{#each techLabels as label (label)}
				<div>
					<TechLabel animate className="text-[14px] px-3 py-2" name={label} />
				</div>
			{/each}
		</div>
	</div>
	<!-- projects -->
	<div class="flex flex-col gap-4">
		<div class="text-left text-4xl font-[300] transition-transform duration-500">Projects</div>
		<div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
			<!-- <div class="h-44 w-full rounded-xl border"></div>
			<div class="h-44 w-full rounded-xl border"></div>
			<div class="h-44 w-full rounded-xl border"></div>
			<div class="h-44 w-full rounded-xl border"></div>
			<div class="h-44 w-full rounded-xl border"></div>
			<div class="h-44 w-full rounded-xl border"></div> -->
		</div>
	</div>
</div>
