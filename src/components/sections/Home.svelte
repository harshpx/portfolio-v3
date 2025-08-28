<script>
	import { useMediaQuery } from "$/reactive-methods/useMediaQuery";
	const isMobile = useMediaQuery("(max-width: 640px)");
</script>

<div
	class={`
    p-2 text-neutral-900 dark:text-[#d2eefa]
    ${
			$isMobile
				? "flex h-full flex-col items-center justify-center gap-2"
				: "flex h-[calc(100vh-70px)] w-full flex-col items-center justify-center gap-2"
		}
  `}
>
	<!-- Name -->
	<div class="flex flex-col items-center justify-center gap-2">
		<div class="font-poppins text-5xl font-[300] sm:text-6xl">Harsh Priye</div>
		<div class="font-poppins text-lg font-extralight sm:text-xl">Full Stack Developer</div>
		<div class="mt-4 font-poppins text-sm font-extralight text-neutral-600 dark:text-[#d2eefab7]">
			I build scalable and resiliant web apps
		</div>
	</div>
	<div class="mt-4 flex items-center justify-center gap-2">
		<a
			href="https://www.github.com/harshpx"
			aria-label="github"
			target="_blank"
			rel="noopener noreferrer"
		>
			<i class="fa-brands fa-github text-2xl text-neutral-900 dark:text-[#d2eefa]"></i>
		</a>
		<a
			href="https://www.linkedin.com/in/harshpx"
			aria-label="linkedin"
			target="_blank"
			rel="noopener noreferrer"
		>
			<i class="fa-brands fa-square-linkedin text-2xl text-neutral-900 dark:text-[#d2eefa]"></i>
		</a>
	</div>
</div>
