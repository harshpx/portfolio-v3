<script lang="ts">
	import logoIcon from "$/assets/icons/logo-light.png";
	import { onMount } from "svelte";
	import { browserInfo, isSessionActive, sendBrowserInfo, setSessionActive } from "$/contexts/analytics";
	import { getBrowserInfo } from "$/utils/commons";

	let { children } = $props();

	onMount(async () => {
		if (isSessionActive()) return;
		const info = await getBrowserInfo();
		browserInfo.set(info);
		await sendBrowserInfo($browserInfo);
		setSessionActive();
	});
</script>

<svelte:head>
	<link rel="icon" href={logoIcon} />
	<title>Harsh Priye</title>
</svelte:head>

<div id="content" class="flex min-h-[100dvh] min-w-[100dvw] flex-col">
	{@render children?.()}
</div>
