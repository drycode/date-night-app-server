module.exports = {
  get: {
    tags: ["Cards CRUD operations"],
    description: "Get all date cards",
    operationId: "getCards",
    parameters: [
      {
        name: "userId",
        in: "path",
        schema: {
          $ref: "#/components/schemas/_id",
        },
        required: true, // Mandatory param
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
