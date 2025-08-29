<script>
	import { useMediaQuery } from "$/reactive-methods/useMediaQuery";
	const isMobile = useMediaQuery("(max-width: 640px)");
</script>

<div
	class={`
		p-2 ${$isMobile ? "" : "flex flex-col flex-wrap"}
	`}
></div>
