<script lang="ts">
	import { useInView } from "$/reactive-methods/useInView";
	import TechLabel from "../TechLabel.svelte";
	import codeboxesDark from "$/assets/images/codeboxes-dark.png";
	import codeboxesLight from "$/assets/images/codeboxes-light.png";
	import memoizeDark from "$/assets/images/memoize-dark.png";
	import tictactoeDark from "$/assets/images/tictactoe-dark.png";
	import weatherDark from "$/assets/images/weather-dark.png";
	import weatherLight from "$/assets/images/weather-light.png";
	import Project from "../Project.svelte";
	import type { ProjectDataType } from "../Project.svelte";

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
		"Shadcn UI",
		"Lit-element",
		"HTML",
		"CSS",
		"Git",
		"Docker",
		"Linux",
		"Github Actions",
		"Visual Studio Code",
		"Vercel",
		"DigitalOcean",
	];

	const projectData: ProjectDataType[] = [
		{
			title: "Codeboxes",
			subtitle: "An online code editor",
			platforms: ["Web"],
			description: `
				Codeboxes is an online code editor with a Next.js + Tailwind CSS frontend 
				and a Spring Boot REST API (Maturity level 2), secured with JWT authentication. 
				Code execution is handled by a Docker-based microservice, 
				with Eureka providing service discovery and an API Gateway managing routing and load balancing for reliable performance.
			`,
			darkImageUrl: codeboxesDark,
			lightImageUrl: codeboxesLight,
			techLabels: [
				"Java",
				"Spring Boot",
				"JWT",
				"MongoDB",
				"Microservices",
				"Eureka",
				"API Gateway",
				"TypeScript",
				"Next.js",
				"Shadcn UI",
				"Tailwind",
				"Docker",
				"Github Actions",
				"DigitalOcean",
				"Vercel",
			],
			repoUrls: [
				"https://github.com/harshpx/Codeboxes",
				"https://github.com/harshpx/codeboxes-server",
			],
			liveUrl: "https://codeboxes.in",
		},
		{
			title: "Memoize",
			subtitle: "Cross-Platform notes & todos app",
			platforms: ["Web", "Mobile"],
			description: `
				Cross-platform notes and reminders app with JWT authentication, 
				featuring a Node.js + Express backend, Next.js + Tailwind CSS web frontend, 
				and an Expo + React Native mobile app. Designed with a clean, user-friendly UI, 
				it supports robust CRUD operations, seamless cross-platform sync, and offline mode on mobile devices.
			`,
			darkImageUrl: memoizeDark,
			techLabels: [
				"JavaScript",
				"Next.js",
				"Shadcn UI",
				"Expo",
				"React Native",
				"GlueStack UI",
				"Tailwind",
				"Node.js",
				"Express.js",
				"MongoDB",
				"JWT",
				"Vercel",
			],
			repoUrls: [
				"https://github.com/harshpx/memoize-v2",
				"https://github.com/harshpx/memoize-server",
				"https://github.com/harshpx/memoize-mobile",
			],
			liveUrl: "https://memoize.in",
			downloadUrl: "https://github.com/harshpx/memoize-mobile/releases",
		},
		{
			title: "Mini Tic-Tac-Toe",
			subtitle: "Simple online multiplayer Tic Tac Toe game",
			platforms: ["Web"],
			description: `
				Developed a web-based Tic Tac Toe game with a React.js frontend and a Node.js + Socket.io backend. 
				Implemented low-latency WebSocket connections for real-time gameplay, lobby management, and scoring. 
				Designed a sleek, modular, and maintainable UI, along with an in-game chat system using parallel socket connections.
			`,
			darkImageUrl: tictactoeDark,
			techLabels: [
				"JavaScript",
				"Node.js",
				"Socket.io",
				"WebSockets",
				"React.js",
				"Tailwind",
				"Docker",
				"Github Actions",
				"DigitalOcean",
				"Vercel",
			],
			repoUrls: ["https://github.com/harshpx/tic-tac-toe-socket"],
			liveUrl: "https://mini-tic-tac-toe.vercel.app",
		},
		{
			title: "Weather",
			subtitle: "A Weather app, powered by OpenWeather API",
			platforms: ["Web"],
			description: `
				A highly responsive weather app using Vite, React.js and Tailwind CSS, 
				fetching real-time data from the OpenWeather API. 
				Contains features like Geolocation search, current weather display in both °C & °F, other weather metrics,
				and a 5-day forecast with intuitive icons and temperature details.
			`,
			darkImageUrl: weatherDark,
			lightImageUrl: weatherLight,
			techLabels: [
				"JavaScript",
				"Vite",
				"React.js",
				"Tailwind",
				"OpenWeather API",
				"Geoapify API",
				"Vercel",
			],
			repoUrls: ["https://github.com/harshpx/weather"],
			liveUrl: "https://weather-harshpx.vercel.app",
		},
	];
</script>

<div class="flex flex-col gap-10 p-6 font-poppins text-neutral-900 sm:p-10 dark:text-[#d2eefa]">
	<!-- tech stack -->
	<div
		use:stackInViewAction
		class={`
			flex w-full flex-col gap-2 transition-transform duration-500 sm:gap-4 lg:w-[60%] 
			${$stackInView ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"}
		`}
	>
		<div class="text-left text-4xl font-[300] transition-transform duration-500">
			My Stack & Tools
		</div>
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
		<div class="flex flex-col gap-4">
			{#each projectData as project, i (project.title)}
				<Project key={i} data={project} />
			{/each}
		</div>
	</div>
</div>
