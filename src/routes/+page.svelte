<script lang="ts">
	import Footer from "$/components/Footer.svelte";
	import About from "$/components/sections/About.svelte";
	import Home from "$/components/sections/Home.svelte";
	import Projects from "$/components/sections/Projects.svelte";
</script>

<div
	id="homepage"
	class="flex h-full w-full flex-col gap-2 overflow-x-hidden overflow-y-auto px-2 pb-2"
>
	<div id="home" class="relative flex h-full w-full shrink-0 flex-col items-center justify-center">
		<Home />
	</div>
	<div id="about" class="min-h-full w-full shrink-0">
		<About />
	</div>
	<div id="projects" class="min-h-full w-full shrink-0">
		<Projects />
	</div>
	<Footer />
</div>
