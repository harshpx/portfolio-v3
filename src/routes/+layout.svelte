<script lang="ts">
	import "../app.css";
	import logoIcon from "$/assets/icons/logo-light.png";
	import CursorSpotlight from "$/components/CursorSpotlight.svelte";
	import Header from "$/components/Header.svelte";
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logoIcon} />
	<title>Harsh Priye</title>
</svelte:head>

<div class="flex h-screen w-screen flex-col overflow-hidden">
	<div id="header" class="h-[60px] w-full">
		<Header />
	</div>
	<div id="content" class="flex h-[calc(100vh-60px)] w-full flex-col">
		{@render children?.()}
	</div>
</div>
<CursorSpotlight />
