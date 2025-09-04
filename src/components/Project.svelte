<script lang="ts">
	import { theme } from "$/contexts/theme";
	import { inlineSvg } from "@svelte-put/inline-svg";
	import githubSvg from "$/assets/icons/github.svg";
	import webSvg from "$/assets/icons/web.svg";
	import mobileSvg from "$/assets/icons/mobile.svg";
	import TechLabel from "./TechLabel.svelte";

	export type ProjectDataType = {
		title: string;
		subtitle?: string;
		platforms: string[];
		description: string;
		darkImageUrl: string;
		lightImageUrl?: string;
		techLabels?: string[];
		repoUrls?: string[];
		liveUrl?: string;
		downloadUrl?: string;
	};

	type ProjectProps = {
		key: number;
		data: ProjectDataType;
	};

	let { key, data }: ProjectProps = $props();
</script>

<div
	class={`
    flex flex-col overflow-hidden rounded-2xl bg-neutral-900/10 shadow-lg dark:bg-white/5 dark:shadow-2xl
    ${key % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
  `}
>
	<!-- image -->
	<div class="h-[260px] w-full overflow-hidden sm:h-[500px] md:w-[60%] lg:h-[550px]">
		{#if $theme === "dark"}
			<img
				src={data.darkImageUrl}
				alt="Codeboxes"
				class="h-full w-full object-cover object-left-top"
			/>
		{:else}
			<img
				src={data.lightImageUrl ?? data.darkImageUrl}
				alt="Codeboxes"
				class="h-full w-full object-cover object-left-top"
			/>
		{/if}
	</div>
	<!-- content -->
	<div
		class="flex w-full flex-col justify-center gap-2 p-5 text-neutral-900 md:w-[40%] dark:text-[#d2eefa]"
	>
		<!-- title, subtitle, platforms -->
		<div class="flex flex-col gap-0">
			<p class="text-[32px] leading-8 font-light">{data.title}</p>
			<p class="text-lg leading-7 font-extralight italic">{data.subtitle ?? ""}</p>
			<div class="mt-1 flex items-center gap-1">
				{#each data.platforms as platform (platform)}
					<div
						class="flex items-center gap-1 rounded-2xl bg-neutral-900/10 px-2 py-0.5 text-[12px] font-extralight dark:bg-[#d2eefa]/10"
					>
						{#if platform === "Web"}
							<svg
								use:inlineSvg={webSvg}
								class="mb-[3px] h-4 w-4 stroke-1 pt-0.5 text-neutral-900 dark:text-[#d2eefa]"
							/>
						{:else if platform === "Mobile"}
							<svg
								use:inlineSvg={mobileSvg}
								class="mb-[3px] h-4 w-4 stroke-1 pt-0.5 text-neutral-900 dark:text-[#d2eefa]"
							/>
						{/if}
						{platform}
					</div>
				{/each}
			</div>
		</div>
		<!-- description -->
		<p class="mt-2 text-justify text-[12px] font-extralight sm:text-[13px]">{data.description}</p>
		<!-- tech stack -->
		<div class="mt-0 flex flex-wrap gap-1">
			{#if data.techLabels}
				{#each data.techLabels as label (label)}
					<div>
						<TechLabel animate className="sm:text-[13px]" name={label} />
					</div>
				{/each}
			{/if}
		</div>
		<!-- links -->
		<div class="mt-3 flex flex-col gap-1 text-[13px] font-extralight">
			<!-- live url -->
			{#if data.liveUrl}
				<div
					class="flex w-fit items-start gap-1 rounded-2xl bg-neutral-900/10 px-2 py-1 dark:bg-[#d2eefa]/10"
				>
					<svg
						use:inlineSvg={webSvg}
						class="h-5 w-5 stroke-1 pt-0.5 text-neutral-900 dark:text-[#d2eefa]"
					/>
					<a
						href={data.liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="underline underline-offset-2 hover:no-underline sm:no-underline sm:hover:underline"
					>
						{data.liveUrl.split("//")[1] || data.liveUrl}
					</a>
				</div>
			{/if}
			<!-- download url -->
			{#if data.downloadUrl}
				<div
					class="flex w-fit items-start gap-1 rounded-2xl bg-neutral-900/10 px-2 py-1 dark:bg-[#d2eefa]/10"
				>
					<svg
						use:inlineSvg={mobileSvg}
						class="h-5 w-5 stroke-1 pt-0.5 text-neutral-900 dark:text-[#d2eefa]"
					/>
					<a
						href={data.downloadUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="underline underline-offset-2 hover:no-underline sm:no-underline sm:hover:underline"
					>
						{data.downloadUrl.split("//")[1] || data.downloadUrl}
					</a>
				</div>
			{/if}
			<!-- repo links -->
			{#if data.repoUrls}
				<div
					class="flex w-fit items-start gap-1 rounded-2xl bg-neutral-900/10 px-2 py-1 dark:bg-[#d2eefa]/10"
				>
					<svg
						use:inlineSvg={githubSvg}
						class="h-5 w-5 stroke-1 pt-0.5 text-neutral-900 dark:text-[#d2eefa]"
					/>
					<div class="flex flex-col gap-0">
						{#each data.repoUrls as url (url)}
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								class="underline underline-offset-2 hover:no-underline sm:no-underline sm:hover:underline"
							>
								{url.split("//")[1] || url}
							</a>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
