import type { ProjectDataType } from "$/components/Project.svelte";
import codeboxesDark from "$/assets/images/codeboxes-dark.png";
import codeboxesLight from "$/assets/images/codeboxes-light.png";
import memoizeDark from "$/assets/images/memoize-dark.png";
import tictactoeDark from "$/assets/images/tictactoe-dark.png";
import weatherDark from "$/assets/images/weather-dark.png";
import weatherLight from "$/assets/images/weather-light.png";
import rentifyDark from "$/assets/images/rentify-dark.png";
import rentifyLight from "$/assets/images/rentify-light.png";
import tealfoxDark from "$/assets/images/tealfox-dark.png";
import dbiDark from "$/assets/images/dbi-dark.png";
import dbiLight from "$/assets/images/dbi-light.png";
import dfDark from "$/assets/images/df-dark.png";
import portfolioV3Dark from "$/assets/images/portfolioV3-dark.png";
import portfolioV3Light from "$/assets/images/portfolioV3-light.png";
import portfolioV2Dark from "$/assets/images/portfolioV2-dark.png";
import type { LinkDataType } from "$/components/LinkButton.svelte";
import githubSvg from "$/assets/icons/github.svg";
import linkedinSvg from "$/assets/icons/linkedin.svg";
import resumeSvg from "$/assets/icons/file.svg";

export const linksData: LinkDataType[] = [
	{ url: "https://www.github.com/harshpx", label: "Github", iconSvg: githubSvg },
	{ url: "https://www.linkedin.com/in/harshpx/", label: "LinkedIn", iconSvg: linkedinSvg },
	{ url: "/resume", label: "Resume", iconSvg: resumeSvg, target: "_self" },
];

export const projectData: ProjectDataType[] = [
	{
		title: "Codeboxes",
		subtitle: "Online code editor",
		platforms: ["Web"],
		description: `
				Codeboxes is an online code editor with a Next.js + Tailwind CSS frontend 
				and a Spring-Boot REST API (Maturity level 2), secured with JWT authentication. 
				Code execution is handled by a Docker-based microservice, 
				with Eureka providing service discovery and an API Gateway managing routing and load balancing for reliable performance.
			`,
		darkImageUrl: codeboxesDark,
		lightImageUrl: codeboxesLight,
		techLabels: [
			"Java",
			"Spring-Boot",
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
		repoUrls: ["https://github.com/harshpx/Codeboxes", "https://github.com/harshpx/codeboxes-server"],
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
		title: "Dog Breed Identifier",
		subtitle: "Identify dog breed from image",
		platforms: ["Web", "AI"],
		description: `
			A web application that identifies dog breeds from images, using a CNN Based deep learning model 
			built with TensorFlow and Keras. The model is trained inside a Jupyter Notebook environment. 
			It is then used inside a Java, Spring-Boot server to create a REST API for application.
			For frontend side, I have used Svelte 5 and Tailwind CSS. 
		`,
		darkImageUrl: dbiDark,
		lightImageUrl: dbiLight,
		techLabels: [
			"Python",
			"Jupyter Notebook",
			"TensorFlow",
			"Keras",
			"CNN",
			"Java",
			"Spring Boot",
			"Typescript",
			"Svelte",
			"Tailwind",
			"Github Actions",
			"DigitalOcean",
			"Vercel",
		],
		repoUrls: ["https://github.com/harshpx/dbi-server", "https://github.com/harshpx/dbi-client"],
		liveUrl: "https://dog-breed-identifier-client.vercel.app",
	},
	{
		title: "Weather",
		subtitle: "Weather app, powered by OpenWeather API",
		platforms: ["Web"],
		description: `
				A highly responsive weather app using Vite, React.js and Tailwind CSS, 
				fetching real-time data from the OpenWeather API. 
				Contains features like Geolocation search, current weather display in both °C & °F, other weather metrics,
				and a 5-day forecast with intuitive icons and temperature details.
			`,
		darkImageUrl: weatherDark,
		lightImageUrl: weatherLight,
		techLabels: ["JavaScript", "Vite", "React.js", "Tailwind", "OpenWeather API", "Geoapify API", "Vercel"],
		repoUrls: ["https://github.com/harshpx/weather"],
		liveUrl: "https://weather-harshpx.vercel.app",
	},
	{
		title: "Rentify",
		subtitle: "Property rental marketplace",
		platforms: ["Web"],
		description: `
				Rentify is a property rental marketplace for both Renters & Tenants. 
				It features React.js, Ant Design and Tailwind CSS frontend,
				and a Node.js + Express.js backend with MongoDB database.
				It features property listings, user authentication, 
				and a responsive design for an optimal user experience across devices.
			`,
		darkImageUrl: rentifyDark,
		lightImageUrl: rentifyLight,
		techLabels: ["Javascript", "React.js", "Ant Design", "Tailwind", "Node.js", "Express.js", "MongoDB", "Vercel"],
		repoUrls: ["https://github.com/harshpx/Rentify"],
		liveUrl: "https://rentify-harshpx.vercel.app",
	},
	{
		title: "Portfolio V3",
		subtitle: "My personal portfolio website",
		platforms: ["Web"],
		description: `
			This is the 3rd version of my personal portfolio website, built using SvelteKit and Tailwind CSS.
			It is written entirely in Svelte 5 and Typescript to ensure type safety and better developer experience. 
			It features a clean and modern design, with a focus on showcasing my projects and skills.
			It is fully responsive and works well on all devices.
		`,
		darkImageUrl: portfolioV3Dark,
		lightImageUrl: portfolioV3Light,
		techLabels: ["Typescript", "SvelteKit", "Tailwind", "Svelte-Motion", "Vercel"],
		repoUrls: ["https://github.com/harshpx/portfolio-v3"],
		liveUrl: "https://www.harshpriye.in",
	},
	{
		title: "Portfolio V2",
		subtitle: "My personal portfolio website (Version 2, Old)",
		platforms: ["Web"],
		description: `
			This is the 2nd version of my personal portfolio website, built using Next.js and Tailwind CSS. 
			It features a clean and modern design, with a focus on showcasing my projects and skills.
			It is fully responsive and works well on all devices.
		`,
		darkImageUrl: portfolioV2Dark,
		techLabels: ["Javascript", "Next.js", "Tailwind", "Vercel"],
		repoUrls: ["https://github.com/harshpx/portfolio-v2"],
		liveUrl: "v2-harshpx.vercel.app",
	},
	{
		title: "Deepfake Detection",
		subtitle: "Detect deepfake images using Deep Learning",
		platforms: ["AI", "Web"],
		description: `
			This is a deep learning model trained on 22k images of real and deepfake faces from 2 widely popular datasets - 
			'thispersondoesnotexist' for fake faces and 'flicker-faces' for real faces.
			The model is built using TensorFlow and Keras inside a Jupyter Notebook environment. 
			It is then used inside a FastAPI server to provide predictions through a REST API.
		`,
		darkImageUrl: dfDark,
		techLabels: ["Python", "Jupyter Notebook", "TensorFlow", "Keras", "CNN", "OpenCV", "FastAPI"],
		repoUrls: ["https://github.com/harshpx/deepfake-detection"],
		otherLinks: ["https://kaggle.com/code/harshpriye/dbi-model"],
	},
	{
		title: "Tealfox",
		subtitle: "Beautiful Firefox theme",
		platforms: ["Customization"],
		description: `
				A clean and simple Userstyle CSS theme for Firefox, based on teal color palette.
			`,
		darkImageUrl: tealfoxDark,
		techLabels: ["CSS", "Userstyles", "Firefox"],
		repoUrls: ["https://github.com/harshpx/TealFox"],
	},
];

export const techLabels: string[] = [
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
