<script lang="ts">
	import { inlineSvg } from "@svelte-put/inline-svg";
	import { theme, toggleTheme } from "$/contexts/theme";
</script>

<button
	onclick={toggleTheme}
	class="
		flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl bg-neutral-900
		p-2 text-white
		sm:h-9 sm:w-9
		dark:bg-[#d2eefa] dark:text-black
	"
>
	{#if $theme === "light"}
		<svg
			use:inlineSvg={"src/assets/sun.svg"}
			class="stroke-3 text-[#d2eefa] sm:stroke-2 dark:text-neutral-900"
		></svg>
	{:else}
		<svg
			use:inlineSvg={"src/assets/moon.svg"}
			class="stroke-3 text-[#d2eefa] sm:stroke-2 dark:text-neutral-900"
		></svg>
	{/if}
</button>
