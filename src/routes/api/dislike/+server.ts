import type { RequestHandler } from "@sveltejs/kit";
import redisClient from "$/utils/redis";

export const POST: RequestHandler = async () => {
	try {
		const likes = await redisClient.decr("likes");
		return new Response(JSON.stringify({ likes }), {
			headers: { "Content-Type": "application/json" },
			status: 200,
		});
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ error: "Failed to decrement likes" }), {
			headers: { "Content-Type": "application/json" },
			status: 500,
		});
	}
};
