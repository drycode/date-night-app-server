const { pathParamId } = require("../components");
module.exports = {
  post: {
    tags: ["Cards CRUD operations"],
    description: "Create a card",
    operationId: "createCard",
    parameters: [
      {
        name: "userId",
        in: "path",
        schema: pathParamId,
        required: true,
        description: "User unique ID",
      },
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#components/schemas/DateCardPayload",
          },
        },
      },
    },

    responses: {
      200: {
        description: "Card has been created",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/DateCard",
            },
          },
        },
      },
    },
  },
};
