const { postBodyRequestPayload, dateCardPayload } = require("./schemas");

module.exports = {
  post: {
    tags: ["Cards CRUD operations"],
    description: "Create a card",
    operationId: "createCard",
    requestBody: {
      content: {
        "application/json": {
          schema: postBodyRequestPayload,
        },
      },
    },

    responses: {
      200: {
        description: "Card has been created",
        content: {
          "application/json": {
            schema: dateCardPayload,
          },
        },
      },
    },
  },
};
