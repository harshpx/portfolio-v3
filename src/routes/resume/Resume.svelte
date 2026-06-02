<script lang="ts">
	import Svg from "$/components/Svg.svelte";
	import mailSvg from "$/assets/icons/mail.svg";
	import phoneSvg from "$/assets/icons/phone.svg";
	import linkedinSvg from "$/assets/icons/linkedin.svg";
	import githubSvg from "$/assets/icons/github.svg";
	import webSvg from "$/assets/icons/web.svg";
	import mobileSvg from "$/assets/icons/mobile.svg";
	import { resumeData } from "$/utils/contents";
	import { parseMarkdownText as parseText } from "$/utils/commons";
</script>

<div
	class={`
    flex h-[297mm] min-w-[210mm] flex-col gap-2
    rounded-xl border-gray-300 bg-white p-[6mm] font-poppins text-[11px] text-black shadow-xl
`}
>
	<!-- Header -->
	<div class="flex flex-wrap items-center justify-between">
		<!-- Title & subtitle -->
		<div class="flex flex-col">
			<h1 class="text-4xl font-bold">{resumeData.name}</h1>
			<h3 class="text-lg font-light">{resumeData.role}</h3>
		</div>
		<!-- Contact Information -->
		<div class="flex flex-col gap-1">
			<div class="flex flex-wrap items-center gap-x-4 gap-y-1">
				<div class="flex items-center gap-1">
					<Svg svg={phoneSvg} class="h-4 w-4 stroke-2" />
					<span class="text-nowrap">{resumeData.contact.phone}</span>
				</div>
				<div class="flex items-center gap-1">
					<Svg svg={mailSvg} class="h-4 w-4 stroke-2" />
					<span class="text-nowrap">{resumeData.contact.email}</span>
				</div>
			</div>
			<div class="flex flex-wrap items-center gap-x-4 gap-y-1">
				<div class="flex items-center gap-1">
					<Svg svg={webSvg} class="h-4 w-4 stroke-2" />
					<a
						href={resumeData.links.website.url}
						target="_blank"
						rel="noopener noreferrer"
						class="text-blue-600 underline"
					>
						{resumeData.links.website.display}
					</a>
				</div>
				<div class="flex items-center gap-1">
					<Svg svg={githubSvg} class="h-4 w-4 stroke-2" />
					<a
						href={resumeData.links.github.url}
						target="_blank"
						rel="noopener noreferrer"
						class="text-blue-600 underline"
					>
						{resumeData.links.github.display}
					</a>
				</div>
				<div class="flex items-center gap-1">
					<Svg svg={linkedinSvg} class="h-4 w-4 stroke-2" />
					<a
						href={resumeData.links.linkedin.url}
						target="_blank"
						rel="noopener noreferrer"
						class="text-blue-600 underline"
					>
						{resumeData.links.linkedin.display}
					</a>
				</div>
			</div>
		</div>
	</div>
	<!-- Work Experience -->
	<div class="flex flex-col gap-0.5">
		<h2 class="text-xl font-semibold">Work Experience</h2>
		<hr class="" />
		<!-- Experience List -->
		<div class="flex flex-col gap-0.5">
			{#each resumeData.workExperience as experience, index (index)}
				<div class="flex flex-col">
					<div class="flex items-center justify-between gap-2">
						<span class="text-base font-semibold">{experience.company}</span>
						<span class="text-[14px] font-semibold">{experience.duration}</span>
					</div>
					<ul class="ml-4 list-outside list-disc">
						{#each experience.roles as role, index (index)}
							<li>
								<div class="flex items-center justify-between gap-2 text-[14px] italic">
									<span>{role.role}</span>
									<span>({role.period})</span>
								</div>
								<ul class="ml-1 list-outside list-none">
									{#each role.description as description, index (index)}
										<li class="flex gap-1">
											<span class="shrink-0">-</span>
											<span class="text-justify">{description}</span>
										</li>
									{/each}
								</ul>
								<div class="mt-1 flex items-center gap-1">
									<span class="font-bold">Tech Stack:</span>
									<span>{role.techStack}</span>
								</div>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
	<!-- Education -->
	<div class="flex flex-col gap-0.5">
		<h2 class="text-xl font-semibold">Education</h2>
		<hr class="" />
		<div class="flex flex-col gap-0.5">
			{#each resumeData.education as edu, index (index)}
				<div class="flex flex-col">
					<div class="flex items-end justify-between gap-2 text-[14px] font-semibold">
						<span>{edu.degree}</span>
						<span>{edu.score}</span>
					</div>
					<div class="flex items-end justify-between gap-2 text-[14px] italic">
						<span>{edu.institution}</span>
						<span>({edu.period})</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<!-- Projects -->
	<div class="flex flex-col gap-0.5">
		<h2 class="text-xl font-semibold">Projects</h2>
		<hr class="" />
		<div class="flex flex-col gap-1">
			{#each resumeData.projects as project, index (index)}
				<div class="flex flex-col gap-1">
					<div class="flex flex-col">
						<span class="text-base font-semibold">{project.name}</span>
						<span class="font-semibold italic">({project.techStack})</span>
					</div>
					<ul class="ml-4 list-outside list-disc text-justify">
						{#each project.description as description, index (index)}
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							<li>{@html parseText(description)}</li>
						{/each}
					</ul>
					<div class="flex flex-wrap gap-x-4">
						{#if project.links.live.length > 0}
							<div class="flex items-center gap-1">
								<div class="flex items-center gap-0.5">
									<Svg svg={webSvg} class="h-3 w-3 stroke-2" />
									<span class="font-bold">Live:</span>
								</div>
								{#each project.links.live as liveLink, index (index)}
									<a href={liveLink} target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
										{`${liveLink.replace("https://", "")}`}
									</a>
									{#if index < project.links.live.length - 1}
										<span>,</span>
									{/if}
								{/each}
							</div>
						{/if}
						{#if project.links.source.length > 0}
							<div class="flex items-center gap-1">
								<div class="flex items-center gap-0.5">
									<Svg svg={githubSvg} class="h-3 w-3 stroke-2" />
									<span class="font-bold">Source:</span>
								</div>
								{#each project.links.source as sourceLink, index (index)}
									<a href={sourceLink} target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
										{`${sourceLink.replace("https://", "")}`}
									</a>
									{#if index < project.links.source.length - 1}
										<span>,</span>
									{/if}
								{/each}
							</div>
						{/if}
						{#if project.links.mobile.length > 0}
							<div class="flex items-center gap-1">
								<div class="flex items-center gap-0.5">
									<Svg svg={mobileSvg} class="h-3 w-3 stroke-2" />
									<span class="font-bold">Mobile:</span>
								</div>
								{#each project.links.mobile as mobileLink, index (index)}
									<a href={mobileLink} target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
										{`${mobileLink.replace("https://", "")}`}
									</a>
									{#if index < project.links.mobile.length - 1}
										<span>,</span>
									{/if}
								{/each}
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
	<!-- Technical Skills / Tech stack -->
	<div class="flex flex-col gap-1">
		<h2 class="text-xl font-semibold">Technical Skills / Tech Stack</h2>
		<hr class="" />
		<div class="flex flex-col">
			{#each resumeData.skills as skill, index (index)}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<span>{@html parseText(skill)}</span>
			{/each}
		</div>
	</div>
</div>
