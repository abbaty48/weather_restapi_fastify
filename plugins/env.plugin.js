import fastifyEnv from "@fastify/env";
import fastifyPlugin from "fastify-plugin";

export default fastifyPlugin(async function envPlugin(instance) {
	instance.register(fastifyEnv, {
		schema: {
			type: "object",
			additionalProperties: false,
			required: ["API_KEY"],
			properties: {
				PORT: { type: "number", default: 3000 },
				API_KEY: { type: "string" },
			},
		},
		data: {
			...process.env,
		},
	});
});
