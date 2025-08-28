<script lang="ts">
	import Header from "$/components/Header.svelte";
	import About from "$/components/sections/About.svelte";
	import Home from "$/components/sections/Home.svelte";
	import Projects from "$/components/sections/Projects.svelte";
	import { useMediaQuery } from "$/reactive-methods/useMediaQuery";

	const isSmallScreen = useMediaQuery("(max-width: 640px)");

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
	onwheel={$isSmallScreen ? undefined : handleScroll}
	id="homepage"
	class="
		flex h-[calc(100vh-60px)] w-full flex-col
		gap-2 overflow-x-hidden overflow-y-auto px-2 pb-2
		sm:flex-row sm:overflow-x-auto sm:overflow-y-hidden
	"
>
	<div
		id="home"
		class="
			min-h-[60%] min-w-full shrink-0 rounded-2xl border-2 border-neutral-900
    	sm:min-h-0 sm:min-w-full dark:border-[#d2eefa]
		"
	>
		<Home />
	</div>
	<div
		id="about"
		class="
			min-h-full min-w-full shrink-0 rounded-2xl border-2 border-neutral-900
    	sm:min-h-0 sm:min-w-[90%] dark:border-[#d2eefa]
		"
	>
		<About />
	</div>
	<div
		id="projects"
		class="
			min-h-full min-w-full shrink-0 rounded-2xl border-2 border-neutral-900
    	sm:min-h-0 sm:min-w-[90%] dark:border-[#d2eefa]
		"
	>
		<Projects />
	</div>
</div>
