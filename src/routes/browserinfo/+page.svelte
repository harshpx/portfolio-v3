<script lang="ts">
	import { getBrowserInfo, type BrowserInfo } from "$/utils/commons";
	import { onMount } from "svelte";

	let browserInfo: BrowserInfo | null = $state(null);
	type BrowserInfoKey = keyof typeof browserInfo;
	onMount(async () => {
		browserInfo = await getBrowserInfo();
	});
</script>

<div class="flex flex-col px-6 text-neutral-900 dark:text-[#d2eefa]">
	{#if browserInfo}
		{#each Object.keys(browserInfo) as key (key)}
			<div class="flex items-start gap-2">
				<span class="w-[60px] text-cyan-600 dark:text-cyan-500">{key}:</span>
				<span>{browserInfo?.[key as BrowserInfoKey]}</span>
			</div>
		{/each}
	{/if}
</div>
