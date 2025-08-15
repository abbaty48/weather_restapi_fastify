import fastifyRedis from "@fastify/redis";
import fastifyPlugin from "fastify-plugin";

export default fastifyPlugin(async function redisPlugin(instance) {
	instance.register(fastifyRedis, {
		host: "0.0.0.0",
	});
});
