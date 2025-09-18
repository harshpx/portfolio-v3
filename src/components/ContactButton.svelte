<script lang="ts">
	let { children } = $props();
</script>

<button class="flex items-center gap-2 rounded-full bg-neutral-900/10 px-3 py-2 font-extralight dark:bg-[#d2eefa]/10">
	{@render children?.()}
</button>
