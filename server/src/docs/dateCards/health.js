const { pathParamId } = require("../components");

module.exports = {
  get: {
    tags: ["Health Check"],
    description: "Health Check",
    operationId: "healthy",
    responses: {
      200: {
        description: "Service is up",
        content: {
          "application/text": {
            schema: {
              type: "string",
              example: "Hello World!",
            },
          },
        },
      },
    },
  },
};
