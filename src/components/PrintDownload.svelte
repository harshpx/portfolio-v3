<script lang="ts">
	import Svg from "$/components/Svg.svelte";
	import downloadSvg from "$/assets/icons/download.svg";
	import { printComponentA4 } from "$/utils/commons";
	import { useHover } from "$/reactive-methods/useHover";
	import { useMediaQuery } from "$/reactive-methods/useMediaQuery";
	import { Motion } from "svelte-motion";

	const [buttonHovered, buttonHoverAction] = useHover();
	const isLargeScreen = useMediaQuery("(min-width: 1024px)");

	const { componentRef } = $props();
</script>

<button
	use:buttonHoverAction
	onclick={async () => await printComponentA4(componentRef)}
	class={`
		box-border flex h-8 w-fit cursor-pointer items-center justify-center gap-1 rounded-xl bg-neutral-900
		p-2 font-poppins text-white sm:h-9 dark:bg-[#d2eefa] dark:text-black 
		${!$buttonHovered || !$isLargeScreen ? "aspect-square" : ""}
	`}
>
	<Svg svg={downloadSvg} class="h-5 w-5 stroke-3 text-[#d2eefa] sm:h-6 sm:w-6 dark:text-neutral-900" />
	<Motion initial={{ width: 0 }} animate={{ width: $buttonHovered && $isLargeScreen ? 85 : 0 }} let:motion>
		<span use:motion class={`${$buttonHovered && $isLargeScreen ? "block" : "hidden"}`}> Download </span>
	</Motion>
</button>
