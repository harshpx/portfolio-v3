<script lang="ts">
	import Header from "$/components/Header.svelte";
	import About from "$/components/sections/About.svelte";
	import Home from "$/components/sections/Home.svelte";
	import Projects from "$/components/sections/Projects.svelte";
</script>

<div class="h-[60px] w-full">
	<Header />
</div>
<div
	id="homepage"
	class="flex h-[calc(100vh-60px)] w-full flex-col gap-2 overflow-y-auto px-2 pb-2 sm:snap-y sm:snap-proximity sm:scroll-smooth"
>
	<div id="home" class="flex h-full w-full shrink-0 items-center justify-center sm:snap-center">
		<Home />
	</div>
	<div id="about" class="min-h-full w-full shrink-0 sm:snap-center">
		<About />
	</div>
	<div id="projects" class="min-h-full w-full shrink-0 sm:snap-center">
		<Projects />
	</div>
</div>
