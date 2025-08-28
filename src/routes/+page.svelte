<script lang="ts">
	import Header from "$/components/Header.svelte";
	import About from "$/components/sections/About.svelte";
	import Home from "$/components/sections/Home.svelte";
	import Projects from "$/components/sections/Projects.svelte";
	import { useMediaQuery } from "$/reactive-methods/useMediaQuery";

	const isSmallScreen = useMediaQuery("(max-width: 640px)");

	let container: HTMLDivElement | null = null;
	let isGestureActive = false;
	let gestureTimeout: ReturnType<typeof setTimeout>;

	const handleScroll = (event: WheelEvent) => {
		event.preventDefault();
		if (!container) return;

		// If already handling a gesture, ignore this event
		if (isGestureActive) {
			clearTimeout(gestureTimeout);
			gestureTimeout = setTimeout(() => {
				isGestureActive = false;
			}, 50); // gesture ends after inactivity
			return;
		}

		// Start a new gesture
		isGestureActive = true;

		// Decide scroll direction
		const direction = event.deltaY > 0 ? 1 : -1;
		const scrollAmount = container.clientWidth * direction;

		container.scrollBy({
			left: scrollAmount,
			behavior: "smooth",
		});

		// End gesture after inactivity
		gestureTimeout = setTimeout(() => {
			isGestureActive = false;
		}, 50);
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
		gap-2 overflow-y-auto px-2 pb-2
		sm:snap-x sm:snap-mandatory sm:flex-row
		sm:overflow-x-auto sm:overflow-y-hidden
	"
>
	<div
		id="home"
		class="flex h-full w-full shrink-0 items-center justify-center rounded-2xl sm:snap-center"
	>
		<Home />
	</div>
	<div
		id="about"
		class="h-full w-full shrink-0 rounded-2xl border-2 border-neutral-900 sm:snap-center dark:border-[#d2eefa]"
	>
		<About />
	</div>
	<div
		id="projects"
		class="h-full w-full shrink-0 rounded-2xl border-2 border-neutral-900 sm:snap-center dark:border-[#d2eefa]"
	>
		<Projects />
	</div>
</div>
