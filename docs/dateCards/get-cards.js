module.exports = {
  get: {
    tags: ["Cards CRUD operations"], // operation's tag.
    description: "Get all date cards", // operation's desc.
    operationId: "getCards", // unique operation id
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
        description: "Cards were obtained",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/DateCard",
            },
          },
        },
      },
      404: {
        description: "Date Cards not found", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Error", // error data model
            },
          },
        },
      },
    },
  },
};
