<script lang="ts">
	import { useMediaQuery } from "$/reactive-methods/useMediaQuery";
	import { onMount } from "svelte";
	let x = 0;
	let y = 0;

	let isMobile = useMediaQuery("(max-width: 640px)");

	onMount(() => {
		const handleMousePosition = (event: MouseEvent) => {
			x = event.clientX;
			y = event.clientY;
		};
		window.addEventListener("mousemove", handleMousePosition);
		return () => window.removeEventListener("mousemove", handleMousePosition);
	});
</script>

<div class={`${!$isMobile ? "cursor-spotlight" : ""}`} style={`--x:${x}px; --y:${y}px`}></div>

<style>
	.cursor-spotlight {
		pointer-events: none;
		position: fixed;
		inset: 0;
		z-index: 9999;

		background: radial-gradient(
			circle 400px at var(--x) var(--y),
			rgba(0, 140, 255, 0.08),
			rgba(0, 140, 255, 0.02) 60%,
			rgba(0, 140, 255, 0.005) 90%,
			rgba(0, 140, 255, 0.002) 95%,
			rgba(0, 140, 255, 0.001) 120%,
			transparent 100%
		);

		mix-blend-mode: screen;
		transition: background 0.35s ease;
	}
</style>
