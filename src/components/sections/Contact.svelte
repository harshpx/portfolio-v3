<script lang="ts">
	import mailSvg from "$/assets/icons/mail.svg";
	import linkedinSvg from "$/assets/icons/linkedin.svg";
	import instagramSvg from "$/assets/icons/instagram.svg";
	import { inlineSvg } from "@svelte-put/inline-svg";
	import ContactButton from "../ContactButton.svelte";
</script>

<div
	class="
    flex w-full grow flex-col items-center justify-center gap-10 border border-white
    p-6 font-poppins text-neutral-900 sm:p-10 dark:text-[#d2eefa]
  "
>
	<!-- Text group 1 -->
	<div class="flex flex-col items-center justify-center gap-2">
		<div class="text-center text-4xl font-light">Connect with me!</div>
		<div class="flex items-center gap-4">
			<ContactButton>
				<svg use:inlineSvg={mailSvg} class="stroke-1"></svg>
				<span class="leading-5">harsh.rzf@gmail.com</span>
			</ContactButton>
			<ContactButton>
				<svg use:inlineSvg={linkedinSvg} class="stroke-1"></svg>
				<span class="leading-5">linkedin.com/in/harshpx</span>
			</ContactButton>
			<ContactButton>
				<svg use:inlineSvg={instagramSvg} class="stroke-1"></svg>
				<span class="leading-5">instagram.com/harshhh.hhhh</span>
			</ContactButton>
		</div>
	</div>
</div>
