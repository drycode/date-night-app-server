const { userIdSchema, cardIdSchema } = require("./schemas");

module.exports = {
  delete: {
    tags: ["Cards CRUD operations"],
    description: "Delete card with specified ID",
    operationId: "deleteCard",
    parameters: [
      {
        name: "userId",
        in: "path",
        schema: userIdSchema,
        required: true,
        description: "User id",
      },
      {
        name: "cardId",
        in: "path",
        schema: cardIdSchema,
        required: true,
        description: "Unique date card ID",
      },
    ],

    responses: {
      200: {
        description: "Card has been deleted",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/DeletedResponse",
            },
          },
        },
      },
    },
  },
};
