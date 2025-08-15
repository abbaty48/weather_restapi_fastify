import Fastify from "fastify";
import envPlugin from "./plugins/env.plugin.js";

const fastify = Fastify({
	logger: true,
	caseSensitive: false,
	ignoreTrailingSlash: true,
	ajv: {
		customOptions: {
			coerceTypes: "array",
			removeAdditional: "all",
		},
	},
});

fastify.register(envPlugin).after((err) => {
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
