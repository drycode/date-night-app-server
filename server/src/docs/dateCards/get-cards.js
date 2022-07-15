const { dateCardPayload, errorSchema } = require("./schemas");

module.exports = {
  get: {
    tags: ["Cards CRUD operations"], // operation's tag.
    description:
      "Get all date cards -- Relies on Cookie Stored in Browser from Login", // operation's desc.
    operationId: "getCards", // unique operation id
    parameters: [
      // {
      //   name: "name",
      //   in: "query",
      //   schema: nameSchema,
      //   required: false,
      //   description: "Name of the Date Card",
      // },
      // {
      //   name: "repeating",
      //   in: "query",
      //   schema: repeatingSchema,
      //   description: repeatingSchema.description,
      //   required: false,
      // },
      // {
      //   name: "estimatedCost",
      //   in: "query",
      //   schema: costSchema,
      //   description: costSchema.description,
      //   required: false,
      // },
      // {
      //   name: "timeOfDay",
      //   in: "query",
      //   schema: timeOfDaySchema,
      //   description: timeOfDaySchema.description,
      //   required: false,
      // },
      // {
      //   name: "dayOfWeek",
      //   in: "query",
      //   schema: dayOfWeekSchema,
      //   description: dayOfWeekSchema.description,
      //   required: false,
      // },
      // {
      //   name: "petFriendly",
      //   in: "query",
      //   schema: petFriendlySchema,
      //   description: petFriendlySchema.description,
      //   required: false,
      // },
    ],
    responses: {
      200: {
        description: "Cards were obtained",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: dateCardPayload,
            },
          },
        },
      },
      404: {
        description: "Date Cards not found", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: errorSchema,
          },
        },
      },
    },
  },
};
