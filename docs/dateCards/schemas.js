const SAMPLE_USER_ID = "1";
const SAMPLE_CARD_ID = "61f5826a43f7ac76d74903aa";

module.exports = {
  nameSchema: {
    type: "string",
    description: "Name of the date",
    example: "Coffee Date",
  },
  repeatingSchema: {
    type: "boolean",
    description: "Whether or not the date can be repeated",
    example: true,
  },
  budgetSchema: {
    type: "number",
    description: "Total amount to spend on the date",
    example: 100.0,
  },
  timeOfDaySchema: {
    type: "array",
    items: {
      type: "string",
    },
    description: "What time of day",
    example: ["Morning", "Afternoon", "Night"],
  },
  dayOfWeekSchema: {
    type: "array",
    items: {
      type: "string",
    },
    description: "What days of week",
    example: ["Monday", "Tuesday", "Saturday"],
  },
  petFriendlySchema: {
    type: "boolean",
    description: "Can we bring our dog? ",
    example: true,
  },
  userIdSchema: {
    type: "string",
    description: "Unique id which mimics the $oid from Mongo",
    example: SAMPLE_USER_ID,
  },
  cardIdSchema: {
    type: "string",
    description: "Unique id which mimics the $oid from Mongo",
    example: SAMPLE_CARD_ID,
  },
  _id: {
    type: "object",
    description: "MongoDB ID Type",
    example: { $oid: SAMPLE_CARD_ID },
  },
};
