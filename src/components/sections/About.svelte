<script lang="ts">
	import TechLabel from "../TechLabel.svelte";
	import { Motion } from "svelte-motion";
	import { useMediaQuery } from "$/reactive-methods/useMediaQuery";
	import { useInView } from "$/reactive-methods/useInView";
	import NavigationButton from "../NavigationButton.svelte";

	const isMobile = useMediaQuery("(max-width: 640px)");

	const [aboutInView, aboutInViewAction] = useInView({ entry: $isMobile ? 0.2 : 0.4, exit: 0.1 });
	const [expTitleInView, expTitleInViewAction] = useInView({ entry: 0.4, exit: 0.1 });
	const [exp1InView, exp1InViewAction] = useInView({ entry: $isMobile ? 0.1 : 0.4, exit: 0.1 });
	const [exp2InView, exp2InViewAction] = useInView({ entry: $isMobile ? 0.1 : 0.4, exit: 0.1 });
	const [edTitleInView, edTitleInViewAction] = useInView({ entry: 0.4, exit: 0.1 });
	const [ed1InView, ed1InViewAction] = useInView({ entry: $isMobile ? 0.1 : 0.4, exit: 0.1 });
	const [ed2InView, ed2InViewAction] = useInView({ entry: $isMobile ? 0.1 : 0.4, exit: 0.1 });
	const [resBtnInView, resBtnInViewAction] = useInView({ entry: $isMobile ? 0.1 : 0.4, exit: 0.1 });
</script>

<div class="flex flex-col gap-10 p-6 font-poppins text-neutral-900 sm:p-10 dark:text-[#d2eefa]">
	<!-- About me div -->
	<Motion
		initial={{ opacity: 0, x: 200 }}
		animate={$aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
		transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 15, ease: "easeIn" }}
		let:motion
	>
		<div use:aboutInViewAction use:motion class="flex w-full flex-col gap-2 sm:w-5/6 lg:w-2/3 xl:w-1/2">
			<div class="text-left text-4xl font-[300]">About me</div>
			<div class="text-justify text-[15px] font-light opacity-75">
				Currently, I'm a Software Engineer at <a
					href="https://www.tcs.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-cyan-800 underline underline-offset-2 dark:text-cyan-400"
				>
					Tata Consultancy services &lpar;TCS&rpar;
				</a>, specializing in Full-Stack. I contribute to the creation and maintenance of payment applications, ensuring
				security, availability and ease of use of web applications. Following industry standards and best practices to
				deliver an inclusive user experience.
			</div>
		</div>
	</Motion>
	<!-- Experience & education div -->
	<div class="flex w-full flex-col gap-6 sm:flex-row">
		<!-- Experience section -->
		<div class="flex w-full shrink-0 flex-col gap-4 sm:w-[48%]">
			<!-- Experience title -->
			<Motion
				let:motion
				initial={{ opacity: 0, x: 200 }}
				animate={$expTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
				transition={{ duration: 0.4, ease: "easeIn" }}
			>
				<div use:motion use:expTitleInViewAction class="text-left text-4xl font-[300]">Experience</div>
			</Motion>
			<div class="relative flex flex-col gap-4">
				<!-- Vertical line -->
				<Motion
					initial={{ opacity: 0, y: 400 }}
					animate={$exp1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 400 }}
					transition={{ duration: 0.4, ease: "easeIn" }}
					let:motion
				>
					<div use:motion class="absolute top-5 left-[22px] h-[80%] w-[10px]">
						<div class="h-full w-[0.5px] bg-gradient-to-b from-neutral-900 to-transparent dark:from-[#d2eefa]"></div>
					</div>
				</Motion>

				<!-- TCS -->
				<Motion
					initial={{ opacity: 0, x: 200 }}
					animate={$exp1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
					transition={{ duration: 0.4, ease: "easeIn" }}
					let:motion
				>
					<div
						use:exp1InViewAction
						use:motion
						class="flex gap-4 rounded-2xl px-4 py-2 hover:bg-neutral-900/10 hover:dark:bg-white/5"
					>
						<div class="text-3xl leading-7">&bull;</div>
						<div class="flex flex-col gap-2">
							<div class="flex flex-col gap-0">
								<p class="text-2xl">Software Engineer</p>
								<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
									<p class="text-md font-light">Tata Consultancy Services</p>
									<p class="text-sm font-light">&lpar;July 2024 - Present&rpar;</p>
								</div>
								<p class="mt-1 text-sm font-extralight italic">Full Time</p>
							</div>
							<p class="text-justify text-[13px] font-light opacity-75">
								Contributing to the development of secure and scalable RESTful APIs for Forex payments app. Developed
								the frontend of a Forex payment application as part of a 6-member team. Focused on user-centric design
								and seamless user experience. Optimized frontend performance by lazy loading, caching and efficient
								state handling.
							</p>
							<div class="flex flex-wrap gap-1">
								<TechLabel name="Java" />
								<TechLabel name="Spring Boot" />
								<TechLabel name="REST APIs" />
								<TechLabel name="JPA" />
								<TechLabel name="SQL" />
								<TechLabel name="Microservices" />
								<TechLabel name="JavaScript" />
								<TechLabel name="React.js" />
								<TechLabel name="Lit-Element" />
								<TechLabel name="Git" />
							</div>
						</div>
					</div>
				</Motion>
				<!-- Aulacube -->
				<Motion
					initial={{ opacity: 0, x: 200 }}
					animate={$exp2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
					transition={{ duration: 0.4, ease: "easeIn" }}
					let:motion
				>
					<div
						use:exp2InViewAction
						use:motion
						class="flex gap-4 rounded-2xl px-4 py-2 hover:bg-neutral-900/10 hover:dark:bg-white/5"
					>
						<div class="text-3xl leading-7">&bull;</div>
						<div class="flex flex-col gap-2">
							<div class="flex flex-col gap-0">
								<p class="text-2xl">Frontend Developer</p>
								<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
									<p class="text-md font-light">Aulacube Technologies</p>
									<p class="text-sm font-light">&lpar;March 2024 - July 2024&rpar;</p>
								</div>
								<p class="mt-1 text-sm font-extralight italic">Internship</p>
							</div>
							<p class="text-justify text-[13px] font-light opacity-75">
								Developed multiple journey pages alongwwith the admin dashboard for Aula-Edge application. Introduced
								Tailwind CSS to the project, enhancing styling efficiency and consistency. Refactored entire UI to
								implement mobile responsiveness, improving user experience across devices.
							</p>
							<div class="flex flex-wrap gap-1">
								<TechLabel name="JavaScript" />
								<TechLabel name="React.js" />
								<TechLabel name="React Native" />
								<TechLabel name="Zustand" />
								<TechLabel name="Context" />
								<TechLabel name="Tailwind CSS" />
								<TechLabel name="Ant Design" />
								<TechLabel name="Git" />
							</div>
						</div>
					</div>
				</Motion>
			</div>
		</div>
		<!-- Education -->
		<div class="flex w-full shrink-0 flex-col gap-4 sm:w-[48%]">
			<!-- Education title -->
			<Motion
				let:motion
				initial={{ opacity: 0, x: 200 }}
				animate={$edTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
				transition={{ duration: 0.4, ease: "easeIn" }}
			>
				<div use:motion use:edTitleInViewAction class="text-left text-4xl font-[300]">Education</div>
			</Motion>
			<div class="relative flex flex-col gap-4">
				<!-- Vertical line -->
				<Motion
					initial={{ opacity: 0, y: 400 }}
					animate={$ed1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 400 }}
					transition={{ duration: 0.4, ease: "easeIn" }}
					let:motion
				>
					<div use:motion class="absolute top-5 left-[22px] h-[80%] w-[10px]">
						<div class="h-full w-[0.5px] bg-gradient-to-b from-neutral-900 to-transparent dark:from-[#d2eefa]"></div>
					</div>
				</Motion>
				<!-- NSUT -->
				<Motion
					initial={{ opacity: 0, x: 200 }}
					animate={$ed1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
					transition={{ duration: 0.4, ease: "easeIn" }}
					let:motion
				>
					<div
						use:ed1InViewAction
						use:motion
						class="flex gap-4 rounded-2xl px-4 py-2 hover:bg-neutral-900/10 hover:dark:bg-white/5"
					>
						<div class="text-3xl leading-7">&bull;</div>
						<div class="flex flex-col gap-1">
							<div class="flex flex-col">
								<p class="text-sm font-light">Bachelor of Technology &lpar;B.Tech&rpar;</p>
								<p class="text-xl">Computer Science & Mathematics</p>
								<p class="text-lg font-light">Netaji Subhas University of Technology, New Delhi</p>
								<p class="mt-4 text-[13px] font-light italic">CGPA: 7.63</p>
								<p class="mt-0 text-[13px] font-light italic">JEE Mains Percentile: 98.56</p>
								<p class="mt-4 text-[13px] font-light">&lpar;2020 - 2024&rpar;</p>
							</div>
							<div class="mt-1 flex flex-wrap gap-1">
								<TechLabel name="Data Structures" />
								<TechLabel name="Algorithms" />
								<TechLabel name="DBMS" />
								<TechLabel name="Operating Systems" />
								<TechLabel name="Machine Learning" />
								<TechLabel name="Web Development" />
								<TechLabel name="C++" />
								<TechLabel name="Java" />
								<TechLabel name="JavaScript" />
							</div>
						</div>
					</div>
				</Motion>
				<!-- 12th -->
				<Motion
					initial={{ opacity: 0, x: 200 }}
					animate={$ed2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
					transition={{ duration: 0.4, ease: "easeIn" }}
					let:motion
				>
					<div
						use:ed2InViewAction
						use:motion
						class="flex gap-4 rounded-2xl px-4 py-2 hover:bg-neutral-900/10 hover:dark:bg-white/5"
					>
						<div class="text-3xl leading-7">&bull;</div>
						<div class="flex flex-col gap-1">
							<div class="flex flex-col gap-0">
								<p class="text-sm font-light">AISSCE &lpar;CBSE Class 12th&rpar;</p>
								<p class="text-xl">General Science</p>
								<p class="text-lg font-light">Vishwa Bharati Public School, New Delhi</p>
								<p class="mt-4 text-[13px] font-light italic">Percentage: 87%</p>
								<p class="mt-4 text-[13px] font-light">&lpar;2018 - 2019&rpar;</p>
							</div>
							<div class="mt-1 flex flex-wrap gap-1">
								<TechLabel name="Physics" />
								<TechLabel name="Chemistry" />
								<TechLabel name="Mathematics" />
								<TechLabel name="English" />
							</div>
						</div>
					</div>
				</Motion>
			</div>
		</div>
	</div>
	<Motion
		initial={{ opacity: 0, x: 200 }}
		animate={$resBtnInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
		transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 15, ease: "easeIn" }}
		let:motion
	>
		<div use:resBtnInViewAction use:motion>
			<NavigationButton label="View full resume" href="/resume" />
		</div>
	</Motion>
</div>
