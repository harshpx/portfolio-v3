<script lang="ts">
	import heartSvg from "$/assets/icons/heart.svg";
	import LinkButton from "../LinkButton.svelte";
	import { inlineSvg } from "@svelte-put/inline-svg";
	import { contactLinksData } from "$/utils/contents";
	import NavigationButton from "../NavigationButton.svelte";
	import { onMount } from "svelte";
	import { browser } from "$app/environment";
	import { useInView } from "$/reactive-methods/useInView";
	import { Motion } from "svelte-motion";
	// import { useMediaQuery } from "$/reactive-methods/useMediaQuery";

	const linkStyles = {
		containerStyles: "px-2 py-1 sm:px-3 sm:py-2",
		labelStyles: "text-[12px] sm:text-[14px]",
		iconStyles: "h-4 w-4 sm:h-5 sm:w-5",
	};

	let liked: boolean = $state(false);
	if (browser) {
		let isLikedAlready: boolean = localStorage.getItem("liked") === "true";
		liked = isLikedAlready;
	}

	let likeCount: number = $state(0);

	onMount(async () => {
		const res = await fetch("/api/like");
		if (res.status === 200) {
			const data = await res.json();
			likeCount = data.likes;
		}
	});

	const clickHandler = async () => {
		if (!liked) {
			const res = await fetch("/api/like", { method: "POST" });
			if (res.status === 200) {
				const data = await res.json();
				likeCount = data.likes;
				liked = true;
				if (browser) {
					localStorage.setItem("liked", "true");
				}
			}
		} else {
			const res = await fetch("/api/dislike", { method: "POST" });
			if (res.status === 200) {
				const data = await res.json();
				likeCount = data.likes;
				liked = false;
				if (browser) {
					localStorage.setItem("liked", "false");
				}
			}
		}
	};

	// const isMobile = useMediaQuery("(max-width:640px)");
	const [likeInView, likeInViewAction] = useInView({ entry: 0.2, exit: 0.1 });
	const [navInView, navInViewAction] = useInView({ entry: 0.2, exit: 0.1 });
	const [connectInView, connectInViewAction] = useInView({ entry: 0.2, exit: 0.1 });
</script>

<div
	class="flex w-full grow flex-col items-center justify-center gap-10 p-6
    font-poppins text-neutral-900 sm:gap-20 sm:p-10 dark:text-[#d2eefa]"
>
	<!-- Group 1 -->
	<Motion
		let:motion
		initial={{ opacity: 0, x: -50, y: -50 }}
		animate={$likeInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -50, y: -50 }}
		transition={{
			duration: 0.8,
			type: "spring",
			stiffness: 200,
			damping: 10,
			ease: "easeInOut",
		}}
	>
		<div use:motion use:likeInViewAction class="flex flex-col items-center justify-start gap-2 sm:gap-5">
			<div class="text-center text-2xl font-light sm:text-3xl">Liked what you saw?</div>
			<div class="flex items-center gap-2 rounded-full bg-neutral-900/10 pl-3 dark:bg-[#d2eefa]/10">
				<span>Drop a like:</span>
				<button
					onclick={clickHandler}
					class="flex cursor-pointer items-center gap-2 rounded-full bg-cyan-600 px-3 py-2 text-white dark:bg-cyan-500"
				>
					<svg use:inlineSvg={heartSvg} class={`h-6 w-6 ${liked ? "fill-white" : ""}`} />
					<span class="font-light dark:font-extralight">{likeCount}</span>
				</button>
			</div>
		</div>
	</Motion>
	<!-- Group 2 -->
	<Motion
		let:motion
		initial={{ opacity: 0, x: 50, y: 50 }}
		animate={$navInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 50, y: 50 }}
		transition={{
			duration: 2,
			type: "spring",
			stiffness: 200,
			damping: 10,
			ease: "easeInOut",
		}}
	>
		<div use:motion use:navInViewAction class="flex flex-col items-center justify-start gap-2 sm:gap-5">
			<div class="text-center text-2xl font-light sm:text-3xl">Also checkout!</div>
			<div class="flex flex-wrap items-center justify-center gap-2">
				<NavigationButton
					href="/projects"
					label="View my project archive"
					containerStyles={linkStyles.containerStyles}
					labelStyles={linkStyles.labelStyles}
				/>
				<NavigationButton
					href="/resume"
					label="Checkout my resume"
					containerStyles={linkStyles.containerStyles}
					labelStyles={linkStyles.labelStyles}
				/>
			</div>
		</div>
	</Motion>
	<!-- Group 3 -->
	<Motion
		let:motion
		initial={{ opacity: 0, x: -50, y: 50 }}
		animate={$connectInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -50, y: 50 }}
		transition={{
			duration: 2,
			type: "spring",
			stiffness: 200,
			damping: 10,
			ease: "easeInOut",
		}}
	>
		<div use:motion use:connectInViewAction class="flex flex-col items-center justify-start gap-2 sm:gap-5">
			<div class="text-center text-2xl font-light sm:text-3xl">Connect with me!</div>
			<div class="flex flex-wrap items-center justify-center gap-2">
				{#each contactLinksData as linkData (linkData.label)}
					<LinkButton
						{linkData}
						containerStyles={linkStyles.containerStyles}
						labelStyles={linkStyles.labelStyles}
						iconStyles={linkStyles.iconStyles}
					/>
				{/each}
			</div>
		</div>
	</Motion>
</div>
