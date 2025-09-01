<script lang="ts">
	interface Props {
		onclick?: () => void;
	}
	let { onclick }: Props = $props();
</script>

<button
	{onclick}
	class={`
    relative flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 p-2 font-grandhotel
    leading-6 text-[#d2eefa] dark:bg-[#d2eefa] dark:text-neutral-900
    ${onclick ? "cursor-pointer" : ""}
  `}
>
	<p class="text-3xl">h</p>
</button>
<!-- <button {onclick} class="cursor-pointer">
	<img src={$theme === "dark" ? logoLight : logoDark} alt="logo" class="h-8 w-8" />
</button> -->
