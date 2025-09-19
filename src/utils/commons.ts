export const capitalizeFirstLetter = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export type BrowserInfo = {
	userAgent: string;
	timeZone: string;
	locale: string;
};

export const getBrowserInfo = async () => {
	const userAgent = navigator.userAgent;
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	const locale = navigator.language;
	return { userAgent, timeZone, locale } as BrowserInfo;
};
