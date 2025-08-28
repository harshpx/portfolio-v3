<script>
	import { useMediaQuery } from "$/reactive-methods/useMediaQuery";
	const isMobile = useMediaQuery("(max-width: 640px)");
</script>

<div class={`p-2 ${$isMobile ? "" : "flex flex-col flex-wrap"}`}>
	<div class="h-32 w-32 rounded-xl bg-neutral-900 dark:bg-[#d2eefa]"></div>
</div>
