<script lang="ts">
	interface Props {
		name: string;
	}
	let { name }: Props = $props();
</script>

<div
	class="rounded-full bg-neutral-900/10 px-2 py-0.5 text-[11px] font-extralight dark:bg-white/10"
>
	{name}
</div>
