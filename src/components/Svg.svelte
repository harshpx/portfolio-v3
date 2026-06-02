<script lang="ts">
	import { inlineSvg } from "@svelte-put/inline-svg";

	type SvgProps = {
		svg: string;
		alt?: string;
		class?: string;
	};

	const { svg, alt = "", class: className = "" }: SvgProps = $props();
</script>

<svg use:inlineSvg={svg} class={className} aria-label={alt} />
