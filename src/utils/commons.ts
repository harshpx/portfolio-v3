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
	const clone = component.cloneNode(true) as HTMLDivElement;

	const printRoot = document.createElement("div");
	printRoot.classList.add("print-root");
	printRoot.appendChild(clone);

	document.body.appendChild(printRoot);

	window.print();

	setTimeout(() => {
		printRoot.remove();
	}, 1000);
};
