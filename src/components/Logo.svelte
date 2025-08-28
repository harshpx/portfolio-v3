<script lang="ts">
	interface Props {
		onclick?: () => void;
	}
	let { onclick }: Props = $props();
</script>

<button
	{onclick}
	class={`
    relative flex h-9 w-9 items-center justify-center rounded-2xl bg-neutral-900 p-2 leading-6
    text-[#d2eefa] sm:h-10 sm:w-10
    dark:bg-[#d2eefa] dark:text-neutral-900
    ${onclick ? "cursor-pointer" : ""}
  `}
	style="font-family: 'Grand Hotel', cursive;"
>
	<p class="text-4xl">h</p>
</button>
