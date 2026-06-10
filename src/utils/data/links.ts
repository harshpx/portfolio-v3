import type { LinkDataType } from "$/components/LinkButton.svelte";
import githubSvg from "$/assets/icons/github.svg";
import linkedinSvg from "$/assets/icons/linkedin.svg";
import resumeSvg from "$/assets/icons/file.svg";
import projectsSvg from "$/assets/icons/projects.svg";
import mailSvg from "$/assets/icons/mail.svg";
import instagramSvg from "$/assets/icons/instagram.svg";

export const linksData: LinkDataType[] = [
	{ url: "https://www.github.com/harshpx", label: "Github", iconSvg: githubSvg, target: "_blank" },
	{ url: "https://www.linkedin.com/in/harshpx/", label: "LinkedIn", iconSvg: linkedinSvg, target: "_blank" },
	{ url: "/resume", label: "Resume", iconSvg: resumeSvg },
	{ url: "/projects", label: "Projects", iconSvg: projectsSvg },
];

export const contactLinksData: LinkDataType[] = [
	{ url: "mailto:harsh.rzf@gmail.com", label: "harsh.rzf@gmail.com", iconSvg: mailSvg },
	{
		url: "https://www.linkedin.com/in/harshpx/",
		label: "linkedin.com/in/harshpx",
		iconSvg: linkedinSvg,
		target: "_blank",
	},
	{ url: "https://www.instagram.com/harshhh.hhhh", label: "@harshhh.hhhh", iconSvg: instagramSvg, target: "_blank" },
];
