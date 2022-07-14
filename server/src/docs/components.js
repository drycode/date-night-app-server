const {
  nameSchema,
  repeatingSchema,
  timeOfDaySchema,
  dayOfWeekSchema,
  petFriendlySchema,
  _id,
  userIdSchema,
  datetimeSchema,
  isOvernightSchema,
  isWeekendSchema,
  isWeekdaySchema,
  costSchema,
  expiresSchema,
  detailsSchema,
  gMapReferenceSchema,
  locationSchema,
  publicSchema,
} = require("./dateCards/schemas");

const dateCardPayload = {
  public: publicSchema,
  owner: userIdSchema,
  createdBy: userIdSchema,
  createdAt: datetimeSchema,
  updatedAt: datetimeSchema,
  isOvernight: isOvernightSchema,
  isOnWeekend: isWeekendSchema,
  isOnWeekday: isWeekdaySchema,
  estimatedCost: costSchema,
  expires: expiresSchema,
  name: nameSchema,
  details: detailsSchema,
  gMapReference: gMapReferenceSchema,
  location: locationSchema,
  isRepeatable: repeatingSchema,
  timeOfDay: timeOfDaySchema,
  dayOfWeek: dayOfWeekSchema,
  petFriendly: petFriendlySchema,
  expirationDate: datetimeSchema,
};

const deletedResponse = {
  type: "object",
  properties: {
    acknowledged: {
      type: "boolean",
      description: "Whether the db received and responded to the request",
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
    securitySchemes: {
      bearerToken: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
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
