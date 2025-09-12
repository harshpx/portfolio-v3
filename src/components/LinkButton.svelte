<script lang="ts">
	import { useHover } from "$/reactive-methods/useHover";
	import { inlineSvg } from "@svelte-put/inline-svg";
	import { Motion } from "svelte-motion";

	export type LinkDataType = {
		url: string;
		label: string;
		iconSvg?: string;
		target?: "_self" | "_blank";
	};
	const { linkData }: { linkData: LinkDataType } = $props();
	const [buttonHovered, buttonHoveredAction] = useHover();
</script>

<Motion
	let:motion
	initial={{ scale: 1 }}
	animate={$buttonHovered ? { scale: 1.1 } : { scale: 1 }}
	transition={{ duration: 0.1, type: "spring", stiffness: 150, damping: 10 }}
>
	<a
		use:motion
		use:buttonHoveredAction
		href={linkData.url}
		aria-label={linkData.label}
		target={linkData.target ?? "_blank"}
		rel="noopener noreferrer"
		class="flex items-center gap-2 rounded-full bg-neutral-900/10 px-2.5 py-1.5 dark:bg-[#d2eefa]/10"
	>
		{#if linkData.iconSvg}
			<svg
				use:inlineSvg={linkData.iconSvg}
				class={`h-5 w-5 text-neutral-900 dark:text-[#d2eefa] ${$buttonHovered ? "stroke-2" : "stroke-1"}`}
			></svg>
		{/if}
		<span class={`text-sm ${$buttonHovered ? "font-[400]" : "font-extralight"}`}>
			{linkData.label}
		</span>
	</a>
</Motion>
