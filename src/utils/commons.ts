export const capitalizeFirstLetter = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export type BrowserInfo = {
	ip: string;
	userAgent: string;
	timeZone: string;
	locale: string;
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
	fetch("/api/ip");
	const userAgent = navigator.userAgent;
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	const locale = navigator.language;
	return { ip, userAgent, timeZone, locale } as BrowserInfo;
};

export const getIP = async () => {
	const res = await fetch("/api/ip");
	if (res.ok) {
		const data = await res.json();
		return data;
	}
	return null;
};
