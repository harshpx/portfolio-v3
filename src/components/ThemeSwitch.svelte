<script lang="ts">
	import { Moon, Sun } from "lucide-svelte";
	import { theme, toggleTheme } from "$/contexts/theme";
</script>

<button
	onclick={toggleTheme}
	class="
		flex aspect-square h-9 cursor-pointer items-center justify-center
		rounded-2xl bg-neutral-900
		p-2 text-white
		dark:bg-[#d2eefa] dark:text-black
	"
>
	{#if $theme === "light"}
		<Sun />
	{:else}
		<Moon />
	{/if}
</button>
