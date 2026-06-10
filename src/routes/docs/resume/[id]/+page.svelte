<script lang="ts">
	import { page } from "$app/state";
	import { resumeData_backend, resumeData_frontend, type ResumeDataType } from "$/utils/data/resumes";
	import Resume from "$/components/Resume.svelte";
	const id = $derived(page.params.id || "main");
	const keyData: Record<string, ResumeDataType> = {
		main: resumeData_backend,
		fsbe: resumeData_backend,
		fsfe: resumeData_frontend,
	};
	let resumeData: ResumeDataType = $derived(keyData[id]);
</script>

<div class="flex w-full max-w-[210mm] min-w-0 grow overflow-auto rounded-xl">
	<Resume {resumeData} />
</div>
