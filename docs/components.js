const {
  nameSchema,
  repeatingSchema,
  budgetSchema,
  timeOfDaySchema,
  dayOfWeekSchema,
  petFriendlySchema,
  cardIdSchema,
  _id,
} = require("./dateCards/schemas");

const dateCardPayload = {
  name: nameSchema,
  repeating: repeatingSchema,
  budgetInDollars: budgetSchema,
  timeOfDay: timeOfDaySchema,
  dayOfWeek: dayOfWeekSchema,
  petFriendly: petFriendlySchema,
};

const deletedResponse = {
  type: "object",
  properties: {
    acknowledged: {
      type: "boolean",
      description: "Whether the db recieved and responded to the request",
      example: true,
    },
    deletedCount: {
      type: "number",
      description: "Number of records removed by the deletion request",
      example: 1,
    },
  },
};

module.exports = {
  components: {
    schemas: {
      _id: _id,
      // todo model
      DateCard: {
        type: "object",
        properties: {
          _id: { $ref: "#/components/schemas/_id" },
          ...dateCardPayload,
        },
      },
      DateCardPayload: {
        type: "object",
        properties: {
          ...dateCardPayload,
        },
      },
      DeletedResponse: deletedResponse,
      Error: {
        type: "object",
        properties: {
          message: {
            type: "string",
            description: "Error message",
            example: "Not found",
          },
          internal_code: {
            type: "string",
            description: "Error internal code",
            example: "Invalid parameters",
          },
        },
      },
    },
  },
};
