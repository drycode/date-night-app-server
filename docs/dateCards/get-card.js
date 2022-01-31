const { pathParamId } = require("../components");
const _ = {
  get: {
    tags: ["Cards CRUD operations"],
    description: "Get all date cards",
    operationId: "getCards",
    parameters: [
      {
        name: "userId",
        in: "path",
        schema: pathParamId,
        required: true,
        description: "User unique ID",
      },
    ],

    responses: {
      200: {
        description: "Card was obtained",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/DateCard",
            },
          },
        },
      },
      404: {
        description: "Card was not found",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Error",
            },
          },
        },
      },
    },
  },
};
