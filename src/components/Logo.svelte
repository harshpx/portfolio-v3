<script lang="ts">
	import { theme } from "$/contexts/theme";
	import logoDark from "$/assets/logo-dark.png";
	import logoLight from "$/assets/logo-light.png";

	interface Props {
		onclick?: () => void;
	}
	let { onclick }: Props = $props();
</script>

<!-- <button
	{onclick}
	class={`
    relative flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-900 p-2 font-grandhotel leading-6 text-[#d2eefa]
    sm:h-9 sm:w-9 dark:bg-[#d2eefa] dark:text-neutral-900
    ${onclick ? "cursor-pointer" : ""}
  `}
>
	<p class="text-2xl sm:text-3xl">h</p>
</button> -->
<button {onclick} class="cursor-pointer">
	<img src={$theme === "dark" ? logoLight : logoDark} alt="logo" class="h-8 w-8" />
</button>
