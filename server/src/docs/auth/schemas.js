const { userIdSchema } = require("../dateCards/schemas");

const emailSchema = {
  type: "string",
  format: "email",
  description: "Often used to uniquely identify a user",
  example: "johnsmith@hotmail.com",
};

const passwordSchema = {
  type: "string",
  description: "A plaintext password to ship along with the request",
  example: "12345",
};

const loginResponseSchema = {
  type: "object",
  properties: {
    token: {
      type: "string",
      description: "Bearer access token",
      example:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjJjZjJhOTcyZGM4YTA0OTMyN2VmYTJjIiwiZW1haWwiOiJqZWZmQHNtaXRoLmNvbSJ9LCJpc3MiOiJkYXRlLWEtYmFzZSIsImlhdCI6MTY1Nzg3OTM2MCwiZXhwIjoxNjU3OTY1NzYwfQ.y7FE3GNgOWLGbLrx6JBubn6bNE-EWzUp56U2web2gw0",
    },
    userId: userIdSchema,
  },
};

const accessTokenSchema = {
  type: "string",
  description: "A Bearer prefixed access token",
  example:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjJjZjJhOTcyZGM4YTA0OTMyN2VmYTJjIiwiZW1haWwiOiJqZWZmQHNtaXRoLmNvbSJ9LCJpc3MiOiJkYXRlLWEtYmFzZSIsImlhdCI6MTY1Nzg3OTM2MCwiZXhwIjoxNjU3OTY1NzYwfQ.y7FE3GNgOWLGbLrx6JBubn6bNE-EWzUp56U2web2gw0",
};

const decryptedTokenResponse = {
  type: "object",
  properties: {
    value: {
      type: "object",
      properties: {
        data: {
          type: "object",
          properties: {
            id: userIdSchema,
            email: emailSchema,
          },
        },
        iss: { type: "string" },
        iat: { type: "integer" },
        exp: { type: "integer" },
      },
    },
  },
  example: {
    value: {
      data: {
        id: "62cf2a972dc8a049327efa2c",
        email: "jeff@smith.com",
      },
      iss: "date-a-base",
      iat: 1657879360,
      exp: 1657965760,
    },
  },
};

const postJWTTestPayloadSchema = {
  type: "object",
  properties: {
    activeUser: userIdSchema,
    accessToken: accessTokenSchema,
  },
};

const postSignupPayloadSchema = {
  type: "object",
  properties: {
    username: emailSchema,
    password: passwordSchema,
  },
};

module.exports = {
  emailSchema,
  passwordSchema,
  loginResponseSchema,
  decryptedTokenResponse,
  accessTokenSchema,
  postJWTTestPayloadSchema,
  postSignupPayloadSchema,
};
