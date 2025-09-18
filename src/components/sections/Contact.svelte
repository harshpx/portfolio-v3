<script lang="ts">
	import mailSvg from "$/assets/icons/mail.svg";
	import linkedinSvg from "$/assets/icons/linkedin.svg";
	import instagramSvg from "$/assets/icons/instagram.svg";
	import heartSvg from "$/assets/icons/heart.svg";
	import LinkButton from "../LinkButton.svelte";
	import { inlineSvg } from "@svelte-put/inline-svg";

	const linkStyles = {
		styles: "px-2 py-1 sm:px-3 sm:py-2",
		labelStyles: "text-[12px] sm:text-[15px]",
		iconStyles: "h-4 w-4 sm:h-6 sm:w-6",
	};

	let liked: boolean = $state(false);
	let likeCount: number = $state(0);
	const clickHandler = (): void => {
		if (liked) {
			liked = false;
			likeCount -= 1;
		} else {
			liked = true;
			likeCount += 1;
		}
	};
</script>

<div
	class="flex w-full grow flex-col items-center justify-center gap-10
    p-6 font-poppins text-neutral-900 sm:p-10 dark:text-[#d2eefa]"
>
	<div class="flex flex-col items-center justify-start gap-5">
		<div class="text-center text-3xl font-light sm:text-4xl">Liked what you saw?</div>
		<div class="flex items-center gap-2">
			<span>Drop a like:</span>
			<button
				onclick={clickHandler}
				class="flex cursor-pointer items-center gap-2 rounded-2xl
				bg-cyan-600/50 px-3 py-2 text-white dark:bg-cyan-200/30"
			>
				<svg use:inlineSvg={heartSvg} class={`h-6 w-6 ${liked ? "fill-white" : ""}`} />
				<span class="font-light dark:font-extralight">{likeCount}</span>
			</button>
		</div>
	</div>
	<!-- Text group 2 -->
	<div class="flex flex-col items-center justify-start gap-5">
		<div class="text-center text-3xl font-light sm:text-4xl">Connect with me!</div>
		<div class="flex flex-wrap items-center justify-center gap-4">
			<LinkButton
				linkData={{ url: "mailto:harsh.rzf@gmail.com", label: "harsh.rzf@gmail.com", iconSvg: mailSvg }}
				styles={linkStyles.styles}
				labelStyles={linkStyles.labelStyles}
				iconStyles={linkStyles.iconStyles}
			/>
			<LinkButton
				linkData={{
					url: "https://www.linkedin.com/in/harshpx",
					label: "linkedin.com/in/harshpx",
					iconSvg: linkedinSvg,
				}}
				styles={linkStyles.styles}
				labelStyles={linkStyles.labelStyles}
				iconStyles={linkStyles.iconStyles}
			/>
			<LinkButton
				linkData={{
					url: "https://www.instagram.com/harshhh.hhhh",
					label: "instagram.com/harshhh.hhhh",
					iconSvg: instagramSvg,
				}}
				styles={linkStyles.styles}
				labelStyles={linkStyles.labelStyles}
				iconStyles={linkStyles.iconStyles}
			/>
		</div>
	</div>
</div>
