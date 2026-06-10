<script lang="ts">
	import { page } from "$app/state";
	import { resumeData_backend, resumeData_frontend, type ResumeDataType } from "$/utils/data/resumes";
	import Resume from "$/components/Resume.svelte";
	import ThemeSwitch from "$/components/ThemeSwitch.svelte";
	import PrintDownload from "$/components/PrintDownload.svelte";
	const id = $derived(page.params.id || "main");
	const keyData: Record<string, ResumeDataType> = {
		main: resumeData_backend,
		fsbe: resumeData_backend,
		fsfe: resumeData_frontend,
	};
	let resumeData: ResumeDataType = $derived(keyData[id]);

	let resumeRef: HTMLDivElement | null = $state(null);
</script>

<div id="content" class="relative flex h-full w-full justify-center p-4 lg:p-4">
	<div class="fixed top-5 right-5 flex flex-col items-end gap-2">
		<div class="rounded-2xl border-3 border-neutral-900"><ThemeSwitch /></div>
		<div class="rounded-2xl border-3 border-neutral-900"><PrintDownload componentRef={resumeRef} /></div>
	</div>
	<div bind:this={resumeRef} class="flex w-full max-w-[210mm] min-w-0 grow overflow-auto rounded-xl">
		<Resume {resumeData} />
	</div>
</div>
