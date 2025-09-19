<script lang="ts">
	import heartSvg from "$/assets/icons/heart.svg";
	import LinkButton from "../LinkButton.svelte";
	import { inlineSvg } from "@svelte-put/inline-svg";
	import { contactLinksData } from "$/utils/contents";
	import NavigationButton from "../NavigationButton.svelte";
	import { onMount } from "svelte";
	import { browser } from "$app/environment";

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
</script>

<div
	class="flex w-full grow flex-col items-center justify-center gap-20
    p-6 font-poppins text-neutral-900 sm:p-10 dark:text-[#d2eefa]"
>
	<!-- Text group 1 -->
	<div class="flex flex-col items-center justify-start gap-5">
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
	<!-- Text group 2 -->
	<div class="flex flex-col items-center justify-start gap-5">
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
</div>
