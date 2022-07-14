const {
  cardIdSchema,
  postBodyRequestPayload,
  dateCardPayload,
} = require("./schemas");
module.exports = {
  put: {
    tags: ["Cards CRUD operations"],
    description: "Update a card",
    operationId: "updateCard",
    parameters: [
      {
        name: "cardId",
        in: "path",
        schema: cardIdSchema,
        required: true,
        description: "Unique date card ID",
      },
    ],
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
            schema: {
              $ref: dateCardPayload,
            },
          },
        },
      },
    },
  },
};
