const { postSignupPayloadSchema, loginResponseSchema } = require("./schemas");

module.exports = {
  post: {
    tags: ["Sign up as new User"],
    description: "Signup User",
    operationId: "singup",
    requestBody: {
      content: {
        "application/json": {
          schema: postSignupPayloadSchema,
        },
      },
    },
    responses: {
      200: {
        description: "User has been signed up",
        content: {
          "application/json": {
            schema: loginResponseSchema,
          },
        },
      },
    },
  },
};
