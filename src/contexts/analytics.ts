import type { BrowserInfo } from "$/utils/commons";
import { browser } from "$app/environment";
import { writable, type Writable } from "svelte/store";

export const browserInfo: Writable<BrowserInfo | null> = writable(null);

export const setSessionActive = () => {
	if (browser) {
		sessionStorage.setItem("active", "true");
	}
};

export const isSessionActive = () => {
	if (browser) {
		return sessionStorage.getItem("active") === "true";
	}
	return false;
};

export const sendBrowserInfo = async (info: BrowserInfo | null): Promise<void> => {
	if (info === null) return;
	try {
		await fetch("/api/analytics", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ browserInfo: info }),
		});
	} catch (error) {
		console.error("Failed to send browser info: ", error);
	}
};
