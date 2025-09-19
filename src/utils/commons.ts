export const capitalizeFirstLetter = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export type BrowserInfo = {
	ip: string;
	userAgent: string;
	timeZone: string;
	locale: string;
	os: string;
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
	return { ip, userAgent, timeZone, locale, os } as BrowserInfo;
};

const getOS = (userAgent: string) => {
	if (/Windows/i.test(userAgent)) return "Windows";
	if (/Mac/i.test(userAgent)) return "Mac OS";
	if (/iPhone|iPad|iPod/i.test(userAgent)) return "iOS";
	if (/Android/i.test(userAgent)) return "Android";
	if (/Linux/i.test(userAgent)) return "Linux";
};
