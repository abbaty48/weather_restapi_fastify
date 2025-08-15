import Fastify from "fastify";
import fastifyAxios from "fastify-axios";
import envPlugin from "./plugins/env.plugin.js";
import redisPlugins from "./plugins/redis.plugins.js";
import weatherRoutes from "./routes/weather.routes.js";

const fastify = Fastify({
	logger: true,
	routerOptions: {
		caseSensitive: false,
		ignoreTrailingSlash: true,
	},
	ajv: {
		customOptions: {
			coerceTypes: "array",
			removeAdditional: "all",
		},
	},
});

fastify
	.register(envPlugin)
	.register(redisPlugins)
	.register(fastifyAxios)
	.register(weatherRoutes)
	.after((err) => {
		if (err) {
			fastify.log.error(
				"It deem like one of the plugin has a message for you: " + err.message,
			);
		}
	});

fastify.listen({ port: 3000 }, (err, address) => {
	if (err) {
		fastify.log.error(`Error occur starting api, REASON: ${err?.message}`);
		return;
	}
	fastify.log.info(`Server listening on ${address}`);
});
