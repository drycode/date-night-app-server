module.exports = {
  delete: {
    tags: ["Cards CRUD operations"],
    description: "Delete card with specified ID",
    operationId: "deleteCard",
    parameters: [
      {
        name: "userId",
        in: "path",
        schema: {
          $ref: "#/components/schemas/id",
        },
        required: true,
        description: "User id",
      },
      {
        name: "id",
        in: "path",
        schema: {
          $ref: "#/components/schemas/id",
        },
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
