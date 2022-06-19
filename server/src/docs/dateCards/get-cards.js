const {
  nameSchema,
  userIdSchema,
  repeatingSchema,
  budgetSchema,
  timeOfDaySchema,
  dayOfWeekSchema,
  petFriendlySchema,
} = require("./schemas");
module.exports = {
  get: {
    tags: ["Cards CRUD operations"], // operation's tag.
    description: "Get all date cards", // operation's desc.
    operationId: "getCards", // unique operation id
    parameters: [
      {
        name: "userId",
        in: "path",
        schema: userIdSchema,
        required: true,
        description: "User unique ID",
      },
      {
        name: "name",
        in: "query",
        schema: nameSchema,
        required: false,
        description: "Name of the Date Card",
      },
      {
        name: "repeating",
        in: "query",
        schema: repeatingSchema,
        description: repeatingSchema.description,
        required: false,
      },
      {
        name: "budgetInDollars",
        in: "query",
        schema: budgetSchema,
        description: budgetSchema.description,
        required: false,
      },
      {
        name: "timeOfDay",
        in: "query",
        schema: timeOfDaySchema,
        description: timeOfDaySchema.description,
        required: false,
      },
      {
        name: "dayOfWeek",
        in: "query",
        schema: dayOfWeekSchema,
        description: dayOfWeekSchema.description,
        required: false,
      },
      {
        name: "petFriendly",
        in: "query",
        schema: petFriendlySchema,
        description: petFriendlySchema.description,
        required: false,
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
