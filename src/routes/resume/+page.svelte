<script lang="ts">
	import arrowLeft from "$/assets/icons/arrow-left.svg";
	import { useHover } from "$/reactive-methods/useHover";
	import { goto } from "$app/navigation";
	import { inlineSvg } from "@svelte-put/inline-svg";
	import { Motion } from "svelte-motion";

	const [backButtonHovered, backButtonHoverAction] = useHover();
</script>

<Motion
	initial={{ opacity: 0, scale: 0.6 }}
	animate={{ opacity: 1, scale: 1 }}
	transition={{ duration: 0.4, ease: "easeInOut" }}
	let:motion
>
	<div use:motion class="flex h-full w-full flex-col px-2 pb-2">
		<div
			class="
    flex w-full grow flex-col gap-1
    p-6 font-poppins
    text-neutral-900 sm:p-10 lg:p-14 dark:text-[#d2eefa]"
		>
			<button
				use:backButtonHoverAction
				onclick={() => goto("/")}
				class="flex w-fit cursor-pointer items-center gap-1 text-base font-light text-cyan-700 sm:text-lg lg:text-xl dark:text-cyan-400"
			>
				<svg
					use:inlineSvg={arrowLeft}
					class={`
					h-4 w-4 stroke-3 text-cyan-700 transition-transform duration-300 dark:text-cyan-400
					${$backButtonHovered ? "-translate-x-2" : ""}
				`}
				/>
				<span> Harsh Priye</span>
			</button>
			<div class="text-4xl font-[300] sm:text-5xl lg:text-6xl">Resume</div>
			<div class="mt-8 flex w-full grow border">
				<iframe src="/harsh-resume.pdf" title="resume" class=" w-full"></iframe>
			</div>
		</div>
	</div>
</Motion>
