<script lang="ts">
	import { theme } from "$/contexts/theme";
	import { inlineSvg } from "@svelte-put/inline-svg";
	import githubSvg from "$/assets/icons/github.svg";
	import webSvg from "$/assets/icons/web.svg";
	import mobileSvg from "$/assets/icons/mobile.svg";
	import TechLabel from "./TechLabel.svelte";
	import { useMediaQuery } from "$/reactive-methods/useMediaQuery";
	import { Motion } from "svelte-motion";
	import { useInView } from "$/reactive-methods/useInView";

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

	const [cardInView, cardInViewAction] = useInView({ entry: $isMobile ? 0.1 : 0.2, exit: $isMobile ? 0.05 : 0.1 });
	const [titleInView, titleInViewAction] = useInView({ entry: $isMobile ? 0.1 : 0.4, exit: 0.1 });
	const [descInView, descInViewAction] = useInView({ entry: $isMobile ? 0.1 : 0.4, exit: 0.1 });
	const [techInView, techInViewAction] = useInView({ entry: $isMobile ? 0.1 : 0.4, exit: 0.1 });
	const [linksInView, linksInViewAction] = useInView({ entry: $isMobile ? 0.1 : 0.4, exit: 0.1 });
</script>

<!-- Card -->
<Motion
	initial={{ opacity: 0, x: 200 }}
	animate={$cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
	transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 15, ease: "easeIn" }}
	let:motion
>
	<div
		use:motion
		use:cardInViewAction
		class={`
    flex flex-col overflow-hidden rounded-2xl bg-neutral-900/10 shadow-lg dark:bg-white/5 dark:shadow-2xl
    ${asListItem ? "" : key % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
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
				<img src={data.darkImageUrl} alt="Codeboxes" class="h-full w-full object-cover object-left-top" />
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
			<Motion
				initial={{ opacity: 0, x: 200 }}
				animate={$titleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
				transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20, ease: "easeIn" }}
				let:motion
			>
				<div use:motion use:titleInViewAction class="flex flex-col gap-0">
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
			</Motion>
			<!-- description -->
			<Motion
				initial={{ opacity: 0, x: 200 }}
				animate={$descInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
				transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20, ease: "easeIn" }}
				let:motion
			>
				<p use:motion use:descInViewAction class="mt-2 text-justify text-[12px] font-extralight sm:text-[13px]">
					{data.description}
				</p>
			</Motion>
			<!-- tech stack -->
			<Motion
				initial={{ opacity: 0, x: 200 }}
				animate={$techInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
				transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20, ease: "easeIn" }}
				let:motion
			>
				<div use:motion use:techInViewAction class="mt-2 flex flex-wrap gap-1">
					{#each data.techLabels as label (label)}
						<div>
							<TechLabel className="sm:text-[13px]" name={label} />
						</div>
					{/each}
				</div>
			</Motion>
			<!-- links -->
			<Motion
				initial={{ opacity: 0, x: 200 }}
				animate={$linksInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
				transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20, ease: "easeIn" }}
				let:motion
			>
				<div use:motion use:linksInViewAction class="mt-3 flex flex-col gap-1 text-[13px] font-extralight">
					<!-- live url -->
					{#if data.liveUrl}
						<div class="flex w-fit items-start gap-1 rounded-2xl bg-neutral-900/10 px-2 py-1 dark:bg-[#d2eefa]/10">
							<svg use:inlineSvg={webSvg} class="h-5 w-5 stroke-1 pt-0.5 text-neutral-900 dark:text-[#d2eefa]" />
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
						<div class="flex w-fit items-start gap-1 rounded-2xl bg-neutral-900/10 px-2 py-1 dark:bg-[#d2eefa]/10">
							<svg use:inlineSvg={mobileSvg} class="h-5 w-5 stroke-1 pt-0.5 text-neutral-900 dark:text-[#d2eefa]" />
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
						<div class="flex w-fit items-start gap-1 rounded-2xl bg-neutral-900/10 px-2 py-1 dark:bg-[#d2eefa]/10">
							<svg use:inlineSvg={githubSvg} class="h-5 w-5 stroke-1 pt-0.5 text-neutral-900 dark:text-[#d2eefa]" />
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
			</Motion>
		</div>
	</div>
</Motion>
