<script lang="ts">
	interface Props {
		name: string;
		className?: string;
		style?: string;
	}
	let { name, className, style }: Props = $props();
</script>

<div
	class={`
		rounded-full bg-neutral-900/10 px-2 py-1 text-[12px] font-extralight transition-transform 
		duration-600 dark:bg-white/10
		${className}
	`}
	{style}
>
	{name}
</div>
