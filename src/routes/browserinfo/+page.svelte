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
			<div class="mb-2 flex flex-col items-start">
				<span class="w-[100px] text-cyan-600 underline underline-offset-1 dark:text-cyan-500">{key}</span>
				<span class="text-[14px]">{browserInfo?.[key as BrowserInfoKey]}</span>
			</div>
		{/each}
	{/if}
</div>
