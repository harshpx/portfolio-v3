import type { RequestHandler } from "@sveltejs/kit";
import redisClient from "$/utils/redis";

export const POST: RequestHandler = async () => {
	try {
		const likes = await redisClient.incr("likes");
		return new Response(JSON.stringify({ likes }), {
			headers: { "Content-Type": "application/json" },
			status: 200,
		});
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ error: "Failed to increment likes" }), {
			headers: { "Content-Type": "application/json" },
			status: 500,
		});
	}
};

export const GET: RequestHandler = async () => {
	try {
		const likes = await redisClient.get("likes");
		return new Response(JSON.stringify({ likes: likes ? parseInt(likes) : 0 }), {
			headers: { "Content-Type": "application/json" },
			status: 200,
		});
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ error: "Failed to fetch likes" }), {
			headers: { "Content-Type": "application/json" },
			status: 500,
		});
	}
};
