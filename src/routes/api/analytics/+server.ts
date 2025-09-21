import type { RequestHandler } from "@sveltejs/kit";
import redisClient from "$/utils/redis";

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { browserInfo } = await request.json();
		await redisClient.rPush("analytics", JSON.stringify(browserInfo));
		return new Response(null, { status: 204 });
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ error: "Failed to log analytics" }), {
			headers: { "Content-Type": "application/json" },
			status: 500,
		});
	}
};
