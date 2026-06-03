import { months } from "./contents";

export const capitalizeFirstLetter = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export type BrowserInfo = {
	ip: string;
	timeZone: string;
	locale: string;
	os: string;
	userAgent: string;
};

export const getBrowserInfo = async (): Promise<BrowserInfo> => {
	let ip = "";
	try {
		const res = await fetch("/api/ip");
		const data = await res.json();
		ip = data.ip;
	} catch (error) {
		console.error(error);
		ip = "";
	}
	const userAgent = navigator.userAgent;
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	const locale = navigator.language;
	const os = getOS(navigator.userAgent);
	return { ip, timeZone, locale, os, userAgent } as BrowserInfo;
};

const getOS = (userAgent: string) => {
	if (/iPhone|iPad|iPod/i.test(userAgent)) return "iOS";
	if (/Android/i.test(userAgent)) return "android";
	if (/Windows/i.test(userAgent)) return "windows";
	if (/Mac/i.test(userAgent)) return "macOS";
	if (/Linux/i.test(userAgent)) return "linux";
};

export const parseMarkdownText = (text: string): string => {
	// to be extended
	return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
};

export const printComponentA4 = (component: HTMLDivElement) => {
	const iframe = document.createElement("iframe");
	iframe.style.position = "fixed";
	iframe.style.right = "0";
	iframe.style.bottom = "0";
	iframe.style.width = "0";
	iframe.style.height = "0";
	iframe.style.border = "0";
	document.body.appendChild(iframe);

	const iframeWindow = iframe.contentWindow;
	const iframeDocument = iframe.contentDocument || iframeWindow?.document;

	if (!iframeWindow || !iframeDocument) return;

	const clone = component.cloneNode(true) as HTMLDivElement;

	iframeDocument.head.innerHTML = `
    <style>
      @page { size: A4 portrait; margin: 0; }
      body { margin: 0; padding: 0; background: white; }
    </style>
  `;

	document.querySelectorAll('style, link[rel="stylesheet"]').forEach((node) => {
		iframeDocument.head.appendChild(node.cloneNode(true));
	});

	iframeDocument.body.appendChild(clone);

	setTimeout(() => {
		iframeWindow.focus();
		iframeWindow.print();
	}, 500);
};

export const getStartEndStringFromDates = (start: Date, end: Date) => {
	const currentDate = new Date();
	if (start.getTime() > end.getTime()) {
		return "Invalid dates";
	} else if (start.getTime() > currentDate.getTime()) {
		return `Starting from ${months[start.getMonth()]?.substring(0, 3)} ${start.getFullYear()}`;
	}
	const startMonth = months[start.getMonth()];
	const startYear = start.getFullYear();
	const endMonth = months[end.getMonth()];
	const endYear = end.getFullYear();
	const isPresent =
		end.getDate() === currentDate.getDate() &&
		end.getMonth() === currentDate.getMonth() &&
		end.getFullYear() === currentDate.getFullYear();
	return `${startMonth.substring(0, 3)} ${startYear} - ${isPresent ? "Present" : `${endMonth.substring(0, 3)} ${endYear}`}`;
};

export const getDurationInMonthsAndYearsFromDates = (start: Date, end: Date) => {
	const startMonth = start.getMonth();
	const startYear = start.getFullYear();
	const endMonth = end.getMonth();
	const endYear = end.getFullYear();

	const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth + 1);
	const years = Math.floor(totalMonths / 12);
	const months = totalMonths % 12;

	let result = "";
	if (years > 0) {
		result += `${years} year${years > 1 ? "s" : ""}`;
	}
	if (months > 0) {
		if (result) result += " ";
		result += `${months} month${months > 1 ? "s" : ""}`;
	}
	return result || "0 months";
};

// comment to trigger deployment