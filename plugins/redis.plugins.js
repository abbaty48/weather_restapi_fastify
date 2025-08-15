import fastifyRedis from "@fastify/redis";
import fastifyPlugin from "fastify-plugin";

export default fastifyPlugin(function redisPlugin(instance, _, next) {
	instance.register(fastifyRedis, {
		host: "0.0.0.0",
	});
	next();
});
