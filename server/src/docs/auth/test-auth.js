const {
  decryptedTokenResponse,
  postJWTTestPayloadSchema,
} = require("./schemas");

module.exports = {
  post: {
    tags: [
      "A simple get request which checks that an authorization token is valid",
    ],
    description: "Test JWT",
    operationId: "Test",
    requestBody: {
      content: {
        "application/json": {
          schema: postJWTTestPayloadSchema,
        },
      },
    },

    responses: {
      200: {
        description: "JWT Is valid and matches active user",
        content: {
          "application/json": {
            schema: decryptedTokenResponse,
          },
        },
      },
    },
  },
};
