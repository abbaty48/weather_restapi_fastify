import ioRedis from "ioredis";
import fastifyPlugin from "fastify-plugin";

const options = {
	host: "127.0.0.1",
	port: 6380,
	db: 0,
};
export default fastifyPlugin(async function redisPlugin(instance, options) {
	instance.decorate("redis", new ioRedis(options));
}, options);
