<script lang="ts">
	import ThemeSwitch from "./ThemeSwitch.svelte";
	import Logo from "./Logo.svelte";
	import { page } from "$app/state";
	import { sections, activeSection, navigateToMainAndScroll, observerHandler } from "$/contexts/activeSection";

	$effect(() => {
		observerHandler();
	});
</script>

<div class="flex h-full w-full items-center justify-between gap-10 px-6">
	<!-- left section -->
	<div class="flex min-w-[10%] justify-start">
		<Logo onclick={() => navigateToMainAndScroll("home")} />
	</div>
	<!-- center section -->
	<div class="flex w-full items-center justify-center">
		{#if page.url.pathname === "/"}
			<div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-black dark:text-white">
				{#each sections.keys() as section, index (index)}
					<div
						class={`
						relative font-poppins text-sm font-light sm:text-base
						${$activeSection === section ? "text-black dark:text-[#86cae7]" : ""} 
					`}
					>
						<!-- button -->
						<button class="cursor-pointer hover:opacity-60" onclick={() => navigateToMainAndScroll(section)}>
							{sections.get(section)}
						</button>
						<!-- underline -->
						<div
							class={`
            absolute bottom-0 h-[1px] w-full border-b border-black transition-opacity 
            duration-200 dark:border-[#86cae7]
            ${$activeSection === section ? "opacity-100" : "opacity-0"}
          `}
						></div>
					</div>
				{/each}
			</div>
		{:else if page.url.pathname === "/projects"}
			<div class="flex items-center gap-2 text-black dark:text-white">
				<span class="font-poppins text-base font-light text-nowrap text-black sm:text-lg dark:text-[#97cce3]">
					Projects Archive
				</span>
			</div>
		{:else if page.url.pathname === "/resume"}
			<div class="flex items-center gap-2 text-black dark:text-white">
				<span class="font-poppins text-base font-light text-nowrap text-black sm:text-lg dark:text-[#97cce3]">
					Resume
				</span>
			</div>
		{/if}
	</div>
	<!-- right button -->
	<div class="flex min-w-[10%] justify-end">
		<ThemeSwitch />
	</div>
</div>
