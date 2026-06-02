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
import mailSvg from "$/assets/icons/mail.svg";
import instagramSvg from "$/assets/icons/instagram.svg";

export const linksData: LinkDataType[] = [
	{ url: "https://www.github.com/harshpx", label: "Github", iconSvg: githubSvg, target: "_blank" },
	{ url: "https://www.linkedin.com/in/harshpx/", label: "LinkedIn", iconSvg: linkedinSvg, target: "_blank" },
	{ url: "/resume", label: "Resume", iconSvg: resumeSvg },
];

export const contactLinksData: LinkDataType[] = [
	{ url: "mailto:harsh.rzf@gmail.com", label: "harsh.rzf@gmail.com", iconSvg: mailSvg },
	{
		url: "https://www.linkedin.com/in/harshpx/",
		label: "linkedin.com/in/harshpx",
		iconSvg: linkedinSvg,
		target: "_blank",
	},
	{ url: "https://www.instagram.com/harshhh.hhhh", label: "@harshhh.hhhh", iconSvg: instagramSvg, target: "_blank" },
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
			"TypeScript",
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
			"Svelte 5",
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
		techLabels: [
			"JavaScript",
			"Vite",
			"React.js",
			"Tailwind",
			"Ant Design",
			"OpenWeather API",
			"Geoapify API",
			"Vercel",
		],
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
		techLabels: ["Typescript", "Svelte 5", "SvelteKit", "Tailwind", "Svelte-Motion", "Vercel"],
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
		liveUrl: "https://v2-harshpx.vercel.app",
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

export const resumeData = {
	name: "Harsh Priye",
	role: "Software Developer",
	contact: {
		phone: "+91-8745946064",
		email: "harsh.rzf@gmail.com",
	},
	links: {
		website: {
			url: "https://www.harshpriye.in",
			display: "harshpriye.in",
		},
		linkedin: {
			url: "https://www.linkedin.com/in/harshpx",
			display: "linkedin.com/in/harshpx",
		},
		github: {
			url: "https://www.github.com/harshpx",
			display: "github.com/harshpx",
		},
	},
	workExperience: [
		{
			company: "Tata Consultancy Services (TCS)",
			duration: "2 years",
			roles: [
				{
					role: "Software Engineer - Full Stack",
					period: "July 2024 - Present",
					description: [
						"Developed & debugged 40+ REST APIs for a trading platform processing with 99.95% transactional accuracy.",
						"Improved API efficiency by 40% by parallel batch processing, along with query aggregation, pagination, and caching.",
						"Developed multiple Spring Batch jobs for report generation, scheduling, database cleanup, and large-scale data processing.",
						"Developed 10+ views (pages) and 30+ UI components for a banking OPS application, with React.js & Lit.",
						"Developed an internal tool to parse and compare COBOL strings, reducing debugging time by 80%.",
						"Implemented recursive functions to efficiently modify, visualize and render XML data on UI.",
					],
					techStack:
						"Java, Spring Boot, Spring Batch, Oracle DB, Docker, Git, Azure, JavaScript, React.js, Lit Framework",
				},
			],
		},
		{
			company: "Aulacube Technologies",
			duration: "4 Months",
			roles: [
				{
					role: "Software Development Intern",
					period: "Mar 2024 - Jun 2024",
					description: [
						"Built an admin dashboard for student data, improving readability, management, and client satisfaction by 40%.",
						"Fixed 30+ irresponsive UI issues on the AulaEdge website for small-screen devices.",
						"Introduced Tailwind CSS to the existing code base for faster and responsive styling.",
					],
					techStack: "Typescript, React.js, Ant Design, Chart.js, Git.",
				},
			],
		},
	],
	education: [
		{
			degree: "B.Tech - Computer Science (Mathematics and Computing)",
			institution: "Netaji Subhas University of Technology (NSUT), New Delhi",
			period: "2020 - 2025",
			score: "CGPA: 7.63",
		},
		{
			degree: "AISSCE (CBSE Class 12)",
			institution: "Vishwa Bharati Public School, New Delhi",
			period: "2019 - 2020",
			score: "Score: 87%",
		},
	],
	projects: [
		{
			name: "Memoize - Productivity Suite - AI, Docs, Events and more",
			about:
				"A comprehensive productivity suite that includes AI-powered LLM, Rich text editor, event scheduling, and more.",
			techStack:
				"Java, Spring Boot, Spring AI, RAG, LLM, PostgreSQL, PgVector, React.js, Capacitor, Kubernetes, Docker, Github Actions",
			description: [
				"Built a Full-stack productivity suite with an **AI-powered LLM (MemoAI)**, Rich text editor and Events scheduling features.",
				"Developed 25+ RESTful APIs with **Spring Boot**, **PostgreSQL**, and JPA, optimizing db performance by query tuning and pagination.",
				"Implemented secure **JWT-based authentication** and **RBAC** using **Spring Security**, with **OAuth2** for Google login.",
				"Integrated Gemini 3.5 Flash via **Spring AI**, using **pgVector** for **RAG-based conversational memory** and **context retention**.",
				"Developed an efficient **Event propagation** function from scratch for scheduling weekly, monthly and yearly recurring events.",
				"Implemented **Rich text editor** in **React.js** by leveraging **Tiptap-UI** components, storing content and formatting in JSON format.",
				"Used **K3s** with 1 node cluster with 2 deployment instances each for Client and Service. Used **Traefik - Ingress** for api gateway routing and load balancing. Automated CI/CD using **github actions**.",
			],
			links: {
				live: ["https://www.memoize.in"],
				source: ["https://github.com/harshpx/memoize-v3-api", "https://github.com/harshpx/memoize-v3-client"],
				mobile: ["https://github.com/harshpx/memoize-v3-client/releases"],
			},
		},
		{
			name: "Codeboxes - Online Code Editor and Compiler",
			about:
				"An online code editor and compiler that supports multiple programming languages and provides a seamless coding experience.",
			techStack:
				"Java, SpringBoot, Microservices, IPC, MongoDB, Next.js, ShadCN, Tailwind, Kubernetes, Docker, Github Actions",
			description: [
				"Developed a full-stack online code editor which can execure codes in 6+ major programming languages.",
				"Created 15+ REST CRUD APIs using **Spring Boot** (REST Maturity Level 2) and secured them with **JWT-based** Spring Security.",
				"Built a **Docker-based** code execution service using Bash and **ProcessBuilder** with self-hosted containers. (No 3rd party APIs used)",
				"Moved to **Microservice** architecture by separating User, Auth and Code services, achieving overall API availability of 99.5%.",
				"Deployed **1 Kubernetes cluster** node with 2 deployment instances per service. Used **Ingress** for api gateway routing and load balancing. Automated CI/CD using **github actions**.",
			],
			links: {
				live: ["https://www.codeboxes.in"],
				source: ["https://github.com/harshpx/codeboxes-server", "https://github.com/harshpx/Codeboxes"],
				mobile: [],
			},
		},
	],
	skills: [
		"**Languages:** Java, JavaScript, TypeScript, Bash, SQL, YAML, HTML, CSS",
		"**Frameworks/Tools:** Spring-Boot, Spring AI, Node.js, Hono, Express.js, Redis, Socket.io, MongoDB, PostgreSQL, Kubernetes, Docker, Github actions, Git, Linux, React.js, Next.js, Svelte, Sveltekit, React-Native, Tailwind CSS",
		"**Soft Skills:** Problem-Solving, Attention to detail, Collaboration, Communication, Adaptability, Ownership, Time management, Continuous learning",
	],
};
