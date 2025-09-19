import { createClient } from "redis";
import { PRIVATE_REDIS_FULL_URL } from "$env/static/private";

const client = createClient({
	url: PRIVATE_REDIS_FULL_URL,
});

client.on("error", (err: Error) => console.error("Redis Client Error", err));

await client.connect();

export default client;
