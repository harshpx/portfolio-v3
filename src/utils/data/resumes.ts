import type { LinkDataType } from "$/components/LinkButton.svelte";
import githubSvg from "$/assets/icons/github.svg";
import linkedinSvg from "$/assets/icons/linkedin.svg";
import webSvg from "$/assets/icons/web.svg";

type ContactInfoDataType = {
	phone: string;
	email: string;
};

type WorkExperienceDataType = {
	company: string;
	roles: {
		role: string;
		startDate: Date;
		endDate: Date;
		description: string[];
		techStack: string;
	}[];
};

type EducationDataType = {
	degree: string;
	institution: string;
	period: string;
	score: string;
};

type ResumeProjectDataType = {
	name: string;
	about: string;
	techStack: string;
	description: string[];
	links: {
		live?: LinkDataType[];
		source: LinkDataType[];
		mobile?: LinkDataType[];
	};
};

export type ResumeDataType = {
	name: string;
	role: string;
	contact: ContactInfoDataType;
	links: LinkDataType[];
	workExperience: WorkExperienceDataType[];
	education: EducationDataType[];
	projects: ResumeProjectDataType[];
	skills: string[];
};

export const resumeData_backend: ResumeDataType = {
	name: "Harsh Priye",
	role: "Software Developer",
	contact: {
		phone: "+91-8745946064",
		email: "harsh.rzf@gmail.com",
	},
	links: [
		{ url: "https://www.harshpriye.in", label: "harshpriye.in", iconSvg: webSvg, target: "_blank" },
		{ url: "https://www.github.com/harshpx", label: "github.com/harshpx", iconSvg: githubSvg, target: "_blank" },
		{
			url: "https://www.linkedin.com/in/harshpx/",
			label: "linked.com/in/harshpx",
			iconSvg: linkedinSvg,
			target: "_blank",
		},
	],
	workExperience: [
		{
			company: "Tata Consultancy Services (TCS)",
			roles: [
				{
					role: "Software Engineer - Full Stack",
					startDate: new Date(2024, 6, 1),
					endDate: new Date(),
					description: [
						"Engineered & debugged 40+ REST APIs for an ESOP trading platform, maintaining 99.95% transactional accuracy.",
						"Improved API efficiency by 40% through parallel batch processing, query aggregation, pagination and caching.",
						"Built multiple Spring Batch jobs for report generation, scheduling, database cleanup and large-scale data processing.",
						"Developed 20+ pages and 30+ UI components for a banking operations application using Lit and JavaScript.",
						"Built an internal COBOL parsing and comparison tool using React.js and TypeScript, reducing debugging time by 80%.",
						"Implemented recursive functions to efficiently modify, visualize and render XML data in the UI.",
					],
					techStack:
						"Java, Spring Boot, Spring Batch, SQL, Oracle DB, Docker, Git, Azure, JavaScript, React.js, Lit Framework",
				},
			],
		},
		{
			company: "Aulacube Technologies",
			roles: [
				{
					role: "Software Development Intern",
					startDate: new Date(2024, 2, 1),
					endDate: new Date(2024, 5, 1),
					description: [
						"Built a responsive admin dashboard for student data management, improving usability and client satisfaction by 40%.",
						"Resolved 30+ responsive UI issues across the AulaEdge platform, significantly improving the mobile user experience.",
						"Introduced Tailwind CSS into the existing codebase, reducing styling overhead and accelerating frontend development.",
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
				"Used **Zustand** for **global state management**, reducing re-renders by ~60% and ensuring consistent state across the app.",
				"Built a responsive **cross-platform** application using **Capacitor JS**, combining web-view with native interactions.",
				"Deployed client and backend services in a single node **K3s** cluster with 2 replicas each.",
				"Used **Traefik - Ingress** for api gateway routing and load balancing. Automated CI/CD using **github actions**.",
			],
			links: {
				live: [{ url: "https://www.memoize.in", label: "memoize.in", target: "_blank" }],
				source: [
					{
						url: "https://github.com/harshpx/memoize-v3-api",
						label: "github.com/harshpx/memoize-v3-api",
						target: "_blank",
					},
					{
						url: "https://github.com/harshpx/memoize-v3-client",
						label: "github.com/harshpx/memoize-v3-client",
						target: "_blank",
					},
				],
				mobile: [
					{
						url: "https://github.com/harshpx/memoize-v3-client/releases",
						label: "github.com/harshpx/memoize-v3-client/releases",
						target: "_blank",
					},
				],
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
				live: [{ url: "https://www.codeboxes.in", label: "codeboxes.in", target: "_blank" }],
				source: [
					{
						url: "https://github.com/harshpx/codeboxes-server",
						label: "github.com/harshpx/codeboxes-server",
						target: "_blank",
					},
					{
						url: "https://github.com/harshpx/Codeboxes",
						label: "github.com/harshpx/Codeboxes",
						target: "_blank",
					},
				],
				mobile: [],
			},
		},
	],
	skills: [
		"**Languages:** Java, JavaScript, TypeScript, Bash, SQL, YAML, HTML, CSS",
		"**Frameworks/Tools:** Spring-Boot, Spring AI, Node.js, Hono, Express.js, Redis, Socket.io, MongoDB, PostgreSQL, Kubernetes, Docker, Github actions, Git, Linux, React.js, Next.js, Svelte, Sveltekit, React-Native, Tailwind CSS",
		"**Soft Skills:** Problem-Solving, Attention to detail, Collaboration, Communication, Adaptability, Time management, Continuous learning",
	],
};

export const resumeData_frontend: ResumeDataType = {
	name: "Harsh Priye",
	role: "Software Developer",
	contact: {
		phone: "+91-8745946064",
		email: "harsh.rzf@gmail.com",
	},
	links: [
		{ url: "https://www.harshpriye.in", label: "harshpriye.in", iconSvg: webSvg, target: "_blank" },
		{ url: "https://www.github.com/harshpx", label: "github.com/harshpx", iconSvg: githubSvg, target: "_blank" },
		{
			url: "https://www.linkedin.com/in/harshpx/",
			label: "linked.com/in/harshpx",
			iconSvg: linkedinSvg,
			target: "_blank",
		},
	],
	workExperience: [
		{
			company: "Tata Consultancy Services (TCS)",
			roles: [
				{
					role: "Software Engineer - Full Stack",
					startDate: new Date(2024, 6, 1),
					endDate: new Date(),
					description: [
						"Developed 20+ pages and 30+ reusable UI components for a banking operations application using React.js, Lit and JavaScript.",
						"Created dynamic and data-driven user interfaces by transforming and rendering complex XML data structures using recursive algorithms.",
						"Built an internal COBOL parsing and comparison tool using React.js and TypeScript, reducing debugging time by 80%.",
						"Engineered & debugged 40+ REST APIs for an ESOP trading platform, maintaining 99.95% transactional accuracy.",
						"Improved API efficiency by 40% through parallel batch processing, query aggregation, pagination and caching.",
						"Built multiple Spring Batch jobs for report generation, scheduling, database cleanup and large-scale data processing.",
					],
					techStack:
						"TypeScript, JavaScript, React.js, Lit Framework, Docker, Git, Java, Spring Boot, Spring Batch, SQL, Azure",
				},
			],
		},
		{
			company: "Aulacube Technologies",
			roles: [
				{
					role: "Software Development Intern",
					startDate: new Date(2024, 2, 1),
					endDate: new Date(2024, 5, 1),
					description: [
						"Built a responsive admin dashboard for student data management, improving usability and client satisfaction by 40%.",
						"Resolved 30+ responsive UI issues across the AulaEdge platform, significantly improving the mobile user experience.",
						"Introduced Tailwind CSS into the existing codebase, reducing styling overhead and accelerating frontend development.",
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
				"Typescript, React.js, Zustand, Capacitor, Tailwind, Java, Spring Boot, Spring AI, RAG, LLM, PostgreSQL, PgVector, Kubernetes, Docker",
			description: [
				"Built a Full-stack productivity suite with an **AI-powered LLM (MemoAI)**, Rich text editor and Events scheduling features.",
				"Used **Zustand** for **global state management**, reducing re-renders by ~60% and ensuring consistent state across the app.",
				"Implemented **Rich text editor** in **React.js** by leveraging **Tiptap-UI** components, storing content and formatting in JSON format.",
				"Developed an efficient **Event propagation** function from scratch for scheduling weekly, monthly and yearly recurring events.",
				"Built a responsive **cross-platform** application using **Capacitor JS**, combining web-view with native interactions.",
				"Developed 25+ RESTful APIs with **Spring Boot**, **PostgreSQL**, and JPA, optimizing db performance by query tuning and pagination.",
				"Implemented secure **JWT-based authentication** and **RBAC** using **Spring Security**, with **OAuth2** for Google login.",
				"Integrated Gemini 3.5 Flash via **Spring AI**, using **pgVector** for **RAG-based conversational memory** and **context retention**.",
				"Orchestrated client and backend service deployments in a single node **K3s** cluster with 2 replicas each.",
				"Used **Traefik - Ingress** for api gateway routing and load balancing. Automated CI/CD using **github actions**.",
			],
			links: {
				live: [{ url: "https://www.memoize.in", label: "memoize.in", target: "_blank" }],
				source: [
					{
						url: "https://github.com/harshpx/memoize-v3-api",
						label: "github.com/harshpx/memoize-v3-api",
						target: "_blank",
					},
					{
						url: "https://github.com/harshpx/memoize-v3-client",
						label: "github.com/harshpx/memoize-v3-client",
						target: "_blank",
					},
				],
				mobile: [
					{
						url: "https://github.com/harshpx/memoize-v3-client/releases",
						label: "github.com/harshpx/memoize-v3-client/releases",
						target: "_blank",
					},
				],
			},
		},
		{
			name: "Codeboxes - Online Code Editor and Compiler",
			about:
				"An online code editor and compiler that supports multiple programming languages and provides a seamless coding experience.",
			techStack:
				"Next.js, ShadCN, Tailwind, Java, SpringBoot, Microservices, IPC, MongoDB, Kubernetes, Docker, Github Actions",
			description: [
				"Developed a full-stack online code editor which can execure codes in 6+ major programming languages.",
				"Used Typescript, **Next.js** and ShadCN UI to build a responsive and intuitive frontend, enhancing user experience and engagement.",
				"Created 15+ REST CRUD APIs using **Spring Boot** (REST Maturity Level 2) and secured them with **JWT-based** Spring Security.",
				"Built a **Docker-based** code execution service using Bash and **ProcessBuilder** with self-hosted containers. (No 3rd party APIs used)",
				"Moved to **Microservice** architecture by separating User, Auth and Code services, achieving overall API availability of 99.5%.",
				"Deployed **1 Kubernetes cluster** node with 2 deployment instances per service.",
				"Used **Ingress** for api gateway routing and load balancing. Automated CI/CD using **github actions**.",
			],
			links: {
				live: [{ url: "https://www.codeboxes.in", label: "codeboxes.in", target: "_blank" }],
				source: [
					{
						url: "https://github.com/harshpx/codeboxes-server",
						label: "github.com/harshpx/codeboxes-server",
						target: "_blank",
					},
					{
						url: "https://github.com/harshpx/Codeboxes",
						label: "github.com/harshpx/Codeboxes",
						target: "_blank",
					},
				],
				mobile: [],
			},
		},
	],
	skills: [
		"**Languages:** JavaScript, TypeScript, Java, Bash, SQL, YAML, HTML, CSS",
		"**Frameworks/Tools:** React.js, Next.js, Svelte, Sveltekit, React-Native, Tailwind CSS, Node.js, Hono, Express.js, Redis, Socket.io, Spring-Boot, Spring AI, MongoDB, PostgreSQL, Kubernetes, Docker, Github actions, Git, Linux",
		"**Soft Skills:** Problem-Solving, Attention to detail, Collaboration, Communication, Adaptability, Time management, Continuous learning",
	],
};
