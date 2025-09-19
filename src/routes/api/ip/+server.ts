import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ getClientAddress }) => {
	let ip = "";
	try {
		const res = await fetch("https://api.ipify.org?format=json");
		if (res.ok) {
			const data = await res.json();
			ip = data.ip;
		} else {
			ip = getClientAddress();
		}
	} catch (error) {
		console.error(error);
		ip = getClientAddress();
	}
	return Response.json({ ip });
};
