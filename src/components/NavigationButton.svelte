<script lang="ts">
	import { useHover } from "$/reactive-methods/useHover";
	import { inlineSvg } from "@svelte-put/inline-svg";
	import arrowUpRight from "$/assets/icons/arrow-up-right.svg";

	export type NavButtonProps = {
		label: string;
		href: string;
		containerStyles?: string;
		labelStyles?: string;
		iconStyles?: string;
	};

	const { label, href, containerStyles, labelStyles, iconStyles }: NavButtonProps = $props();
	const [hovered, hoveredAction] = useHover();
</script>

<a
	use:hoveredAction
	class={`
    flex w-fit cursor-pointer items-center gap-0.5
    rounded-full bg-neutral-900/10 px-3 py-2 font-poppins
    font-light dark:bg-[#d2eefa]/10 ${containerStyles}
  `}
	{href}
>
	<span class={`${labelStyles}`}>{label}</span>
	<svg
		use:inlineSvg={arrowUpRight}
		class={`
      h-4 w-4 text-neutral-900 transition-transform duration-300 dark:text-[#d2eefa]
      ${$hovered ? "stroke-3 sm:translate-x-1 sm:-translate-y-1" : "stroke-3 sm:stroke-2"}
      ${iconStyles}
    `}
	/>
</a>
