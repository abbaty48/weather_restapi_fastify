# Weather Api

> A Weather rest api built with Fastify, this project is written in JavaScript
> to fetch some weather data.

## How to run

- clone and cd into the project.
- Open the project in the terminal.
- `npm install` to install the project dependencies.
- `npm start` to start the project.

### Dependencies

- fastify
- [@fastify/redis] <https://github.com/fastify/fastify-redis>
  > for caching with redis
- [@fastify/env] <https://github.com/davidedantonio/fastify-axios>
- > for environment variables
- [fastify-axios] <https://github.com/davidedantonio/fastify-axios>
  > for requesting the weather api

### EndPoints

METHOD | URL

---

GET | <http://localhost:3000/api/v1/weathers/location>
GET | <http://localhost:3000/api/v1/weathers/location/date1/date2>
