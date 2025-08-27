<script lang="ts">
	interface Props {
		onclick?: () => void;
	}
	let { onclick }: Props = $props();
</script>

<button
	{onclick}
	class={`
    relative flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-900
    p-2 text-3xl leading-6 text-white
    dark:bg-[#d2eefa] dark:text-black
    ${onclick ? "cursor-pointer" : ""}
  `}
	style="font-family: 'Grand Hotel', cursive;"
>
	<p class="">h</p>
</button>
