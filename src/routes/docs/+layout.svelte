<script lang="ts">
	import PrintDownload from "$/components/PrintDownload.svelte";
	import ThemeSwitch from "$/components/ThemeSwitch.svelte";
	let { children } = $props();

	let resumeRef: HTMLDivElement;
</script>

<div id="content" class="relative flex h-full w-full justify-center p-4 lg:p-4">
	<div class="fixed top-5 right-5 flex flex-col items-end gap-2">
		<div class="rounded-2xl border-3 border-neutral-900"><ThemeSwitch /></div>
		<div class="rounded-2xl border-3 border-neutral-900"><PrintDownload componentRef={resumeRef} /></div>
	</div>
	<div bind:this={resumeRef} class="flex w-full max-w-[210mm] min-w-0 grow overflow-auto rounded-xl">
		{@render children?.()}
	</div>
</div>
