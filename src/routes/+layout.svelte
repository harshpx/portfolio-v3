<script lang="ts">
	import "../app.css";
	import logoIcon from "$/assets/favicon.svg";
	import CursorSpotlight from "$/components/CursorSpotlight.svelte";
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logoIcon} />
</svelte:head>

<div class="flex h-screen w-full flex-col">
	{@render children?.()}
</div>
<CursorSpotlight />
