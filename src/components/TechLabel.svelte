<script lang="ts">
	import { useConditionalAction } from "$/reactive-methods/useConditionalAction";
	import { useInView } from "$/reactive-methods/useInView";

	interface Props {
		name: string;
		className?: string;
		style?: string;
		animate?: boolean;
	}
	let { name, className, style, animate = false }: Props = $props();
	const [inView, inViewAction] = useInView({ entry: 0.1, exit: 0.1 });
</script>

<div
	use:useConditionalAction={{ action: inViewAction, enabled: animate }}
	class={`
		rounded-full bg-neutral-900/10 px-2 py-1 text-[12px] font-extralight transition-transform 
		duration-600 dark:bg-white/10
		${!animate || $inView ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
		${className}
	`}
	{style}
>
	{name}
</div>
