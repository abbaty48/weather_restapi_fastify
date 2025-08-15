import fastifyPlugin from "fastify-plugin";

const routeSchema = {
	schema: {
		type: "object",
		params: {
			type: "object",
			required: ["location"],
			properties: {
				location: { type: "string" },
				date1: { type: "string" },
				date2: { type: "string" },
			},
		},
	},
};

const handler = async function(request, _reply) {
	try {
		const { location, date1, date2 } = request.params;
		const key_term = location + date1 + date2;

		let data = await this.redis.get(key_term);

		if (data) return data;

		const url =
			[
				`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}`,
				date1 && date1,
				date2 && date2,
			]
				.join("/")
				.replace(/(\/)+$/, "") +
			`?unitGroup=us&key=${this.config.API_KEY}&contentType=json`;

		data = (await this.axios.get(url)).data;

		this.redis.set(key_term, data);
		return { data };
	} catch (error) {
		this.log.error(error);
		return { error: error?.message };
	}
};

export default fastifyPlugin(
	async function weatherRoutes(instance) {
		instance.get("/weathers/:location", { schema: routeSchema, handler });
		instance.get("/weathers/:location/:date1/:date2?", {
			schema: routeSchema,
			handler,
		});
	},
	{ prefix: "/api/v1" },
);
