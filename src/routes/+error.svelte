<script lang="ts">
	import arrowLeft from "$/assets/icons/arrow-left.svg";
	import { useInView } from "$/reactive-methods/useInView";
	import { goto } from "$app/navigation";
	import { inlineSvg } from "@svelte-put/inline-svg";
	import { Motion } from "svelte-motion";

	const [inView, inViewAction] = useInView({ entry: 0.5, exit: 0.2 });

	const navigateToHome = () => {
		goto(`/#home`);
	};
</script>

<div use:inViewAction class="mt-40">
	<Motion
		initial={{ opacity: 0, scale: 0.5 }}
		animate={$inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
		transition={{
			duration: 0.3,
			type: "spring",
			stiffness: 200,
			damping: 10,
			ease: "easeIn",
		}}
		let:motion
	>
		<div
			use:motion
			class="flex flex-col items-center justify-center gap-1 p-4 text-center font-poppins dark:text-white"
		>
			<span class="text-4xl">Hey there!</span>
			<span class="text-lg font-light">This page doesn't exist</span>
			<button
				onclick={() => navigateToHome()}
				class="mt-4 flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-neutral-900 px-2 py-1.5
        text-white transition-all duration-200 hover:scale-105 dark:bg-[#d2eefa] dark:text-black"
			>
				<svg use:inlineSvg={arrowLeft} class="size-4 transition-all duration-200" />
				<span>Back to home</span>
			</button>
		</div>
	</Motion>
</div>
