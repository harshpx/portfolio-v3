<script lang="ts">
	import { theme } from "$/contexts/theme";
	import { inlineSvg } from "@svelte-put/inline-svg";
	import githubSvg from "$/assets/icons/github.svg";
	import webSvg from "$/assets/icons/web.svg";
	import mobileSvg from "$/assets/icons/mobile.svg";
	import TechLabel from "./TechLabel.svelte";
	import { useInView } from "$/reactive-methods/useInView";
	import { useMediaQuery } from "$/reactive-methods/useMediaQuery";

	export type ProjectDataType = {
		title: string;
		subtitle?: string;
		platforms: string[];
		description: string;
		darkImageUrl: string;
		lightImageUrl?: string;
		techLabels: string[];
		repoUrls?: string[];
		liveUrl?: string;
		downloadUrl?: string;
	};

	type ProjectProps = {
		key: number;
		data: ProjectDataType;
		asListItem?: boolean;
	};

	let { key, data, asListItem = false }: ProjectProps = $props();

	const isMobile = useMediaQuery("(max-width: 640px)");

	const [cardInView, cardInViewAction] = useInView({
		entry: $isMobile ? 0.1 : 0.2,
		exit: $isMobile ? 0.05 : 0.1,
	});
</script>

<div
	use:cardInViewAction
	class={`
    flex flex-col overflow-hidden rounded-2xl bg-neutral-900/10 shadow-lg transition-transform duration-500 dark:bg-white/5 dark:shadow-2xl
    ${asListItem ? "" : key % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
		${$cardInView ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"}
  `}
>
	<!-- image -->
	<div
		class={`
			h-[260px] w-full overflow-hidden sm:h-[500px] lg:h-[550px] 
			${asListItem ? "md:w-full" : "md:w-[60%]"}
		`}
	>
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
		class={`
			flex w-full flex-col justify-center gap-2 p-5 text-neutral-900 dark:text-[#d2eefa]
			${asListItem ? "md:w-full" : "md:w-[40%]"}
		`}
	>
		<!-- title, subtitle, platforms -->
		<div
			class={`
			flex flex-col gap-0 transition-transform duration-[550ms]
			${$cardInView ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
		`}
		>
			<p class="text-[32px] leading-8 font-light">{data.title}</p>
			<p class="text-lg leading-5 font-extralight italic">{data.subtitle ?? ""}</p>
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
		<p
			class={`
			mt-2 text-justify text-[12px] font-extralight transition-transform duration-[600ms] sm:text-[13px]
			${$cardInView ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
		`}
		>
			{data.description}
		</p>
		<!-- tech stack -->
		<div
			class={`mt-2 flex flex-wrap gap-1 transition-transform duration-[650ms] ${$cardInView ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
		>
			{#each data.techLabels as label (label)}
				<div>
					<TechLabel className="sm:text-[13px]" name={label} />
				</div>
			{/each}
		</div>
		<!-- links -->
		<div
			class={`
			mt-3 flex flex-col gap-1 text-[13px] font-extralight transition-transform duration-[700ms]
			${$cardInView ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
		`}
		>
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
						class="underline-offset-2 hover:no-underline sm:no-underline sm:hover:underline"
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
						class="underline-offset-2 hover:no-underline sm:no-underline sm:hover:underline"
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
								class="underline-offset-2 hover:no-underline sm:no-underline sm:hover:underline"
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
