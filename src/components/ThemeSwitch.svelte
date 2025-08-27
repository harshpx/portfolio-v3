<script lang="ts">
	import { Moon, Sun } from "lucide-svelte";
	import { theme, toggleTheme } from "$/contexts/theme";
</script>

<button
	onclick={toggleTheme}
	class="
		h-9 p-2 flex items-center justify-center aspect-square 
		cursor-pointer rounded-2xl
		bg-neutral-900 dark:bg-[#d2eefa]
		text-white dark:text-black
	"
>
	{#if $theme === "light"}
		<Sun />
	{:else}
		<Moon />
	{/if}
</button>
