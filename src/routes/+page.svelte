<script lang="ts">
	import Header from "$/components/Header.svelte";

	let container: HTMLDivElement | null = null;
	const handleScroll = (event: WheelEvent) => {
		event.preventDefault();
		if (container) {
			container.scrollLeft += event.deltaY;
		}
	};
</script>

<div class="h-[60px] w-full">
	<Header />
</div>
<div
	bind:this={container}
	onwheel={handleScroll}
	id="homepage"
	class="flex h-[calc(100vh-60px)] w-full gap-2 overflow-x-auto overflow-y-hidden px-4 pb-2"
>
	<div
		id="home"
		class="h-full min-w-5xl shrink-0 rounded-2xl border-2 border-neutral-900 dark:border-[#d2eefa]"
	></div>
	<div
		id="about"
		class="h-full min-w-5xl shrink-0 rounded-2xl border-2 border-neutral-900 dark:border-[#d2eefa]"
	></div>
	<div
		id="projects"
		class="h-full min-w-5xl shrink-0 rounded-2xl border-2 border-neutral-900 dark:border-[#d2eefa]"
	></div>
</div>
