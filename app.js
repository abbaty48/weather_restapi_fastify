import Fastify from "fastify";

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

fastify.listen({ port: 3000 }, (err, address) => {
	if (err) {
		fastify.log.error(`Error occur starting api, REASON: ${err?.message}`);
		return;
	}
	fastify.log.info(`Server listening on ${address}`);
});
