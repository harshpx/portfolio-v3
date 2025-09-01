<script lang="ts">
	import { inlineSvg } from "@svelte-put/inline-svg";
	import { theme, toggleTheme } from "$/contexts/theme";
	import sun from "$/assets/icons/sun.svg";
	import moon from "$/assets/icons/moon.svg";
</script>

<button
	onclick={toggleTheme}
	class="
		flex h-9 w-9 cursor-pointer items-center justify-center
		rounded-xl bg-neutral-900
		p-2 text-white
		dark:bg-[#d2eefa] dark:text-black
	"
>
	{#if $theme === "light"}
		<svg use:inlineSvg={sun} class="stroke-3 text-[#d2eefa] sm:stroke-2 dark:text-neutral-900"
		></svg>
	{:else}
		<svg use:inlineSvg={moon} class="stroke-3 text-[#d2eefa] sm:stroke-2 dark:text-neutral-900"
		></svg>
	{/if}
</button>
