const SAMPLE_USER_ID = "1";
const SAMPLE_CARD_ID = "61f5826a43f7ac76d74903aa";

const _id = {
  type: "object",
  description: "MongoDB ID Type",
  example: { $oid: SAMPLE_CARD_ID },
};

const pathParamId = {
  type: "string",
  description: "Unique id which mimics the $oid from Mongo",
  example: SAMPLE_USER_ID,
};

const dateCardPayload = {
  name: {
    type: "string",
    description: "Name of the date",
    example: "Coffee Date",
  },
  repeating: {
    type: "boolean",
    description: "Whether or not the date can be repeated",
    example: true,
  },
  budgetInDollars: {
    type: "number",
    description: "Total amount to spend on the date",
    example: 100.0,
  },
  timeOfDay: {
    type: "array",
    description: "What time of day",
    example: ["Morning", "Afternoon", "Night"],
  },
  dayOfWeek: {
    type: "array",
    description: "What days of week",
    example: ["Monday", "Tuesday", "Saturday"],
  },
  petFriendly: {
    type: "boolean",
    description: "Can we bring our dog? ",
    example: true,
  },
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
  pathParamId,

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
