const {
  dateCardPayload,
  userIdSchema,
  errorSchema,
  postBodyRequestPayload,
  _id,
} = require("./dateCards/schemas");

module.exports = {
  components: {
    securitySchemes: {
      bearerToken: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      // todo model
      DateCard: {
        type: "object",
        properties: {
          _id: _id,
          owner: userIdSchema,
          createdBy: userIdSchema,
          ...dateCardPayload,
        },
      },
      PostBodyRequestPayload: postBodyRequestPayload,
      Error: errorSchema,
    },
  },
};
