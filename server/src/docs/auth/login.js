const {
  emailSchema,
  passwordSchema,
  loginResponseSchema,
} = require("./schemas");

module.exports = {
  get: {
    tags: ["Login with existing credentials"],
    description: "Login User",
    operationId: "login",
    parameters: [
      {
        name: "username",
        in: "query",
        schema: emailSchema,
        required: true,
        description: "The requested users username",
      },
      {
        name: "password",
        in: "query",
        schema: passwordSchema,
        required: true,
        description: passwordSchema.description,
      },
    ],
    responses: {
      200: {
        description: "Card has been created",
        content: {
          "application/json": {
            schema: loginResponseSchema,
          },
        },
      },
    },
  },
};
