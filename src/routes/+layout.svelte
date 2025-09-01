<script lang="ts">
	import "../app.css";
	import logoIcon from "$/assets/icons/logo-light.png";
	import CursorSpotlight from "$/components/CursorSpotlight.svelte";
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logoIcon} />
</svelte:head>

<div class="flex h-screen w-screen flex-col overflow-hidden">
	{@render children?.()}
</div>
<CursorSpotlight />
