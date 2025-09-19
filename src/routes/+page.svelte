<script lang="ts">
	import Footer from "$/components/Footer.svelte";
	import About from "$/components/sections/About.svelte";
	import Contact from "$/components/sections/Contact.svelte";
	import Home from "$/components/sections/Home.svelte";
	import Projects from "$/components/sections/Projects.svelte";
	import { Motion } from "svelte-motion";
</script>

<Motion
	initial={{ opacity: 0, scale: 0.6 }}
	animate={{ opacity: 1, scale: 1 }}
	transition={{ duration: 0.4, ease: "easeInOut" }}
	let:motion
>
	<div use:motion id="homepage" class="flex h-full w-full flex-col gap-2 overflow-x-hidden overflow-y-auto px-2 pb-2">
		<div id="home" class="relative flex h-full w-full shrink-0 flex-col items-center justify-center">
			<Home />
		</div>
		<div id="about" class="min-h-full w-full shrink-0">
			<About />
		</div>
		<div id="projects" class="min-h-full w-full shrink-0">
			<Projects />
		</div>
		<div id="contact" class="flex min-h-full w-full shrink-0 flex-col items-center justify-center">
			<Contact />
			<Footer />
		</div>
	</div>
</Motion>
