const SAMPLE_USER_ID = "1";
const SAMPLE_CARD_ID = "61f5826a43f7ac76d74903aa";

const publicSchema = {
  type: "boolean",
  description: "Indicates whether a date is meant to be shared",
};
const nameSchema = {
  type: "string",
  description: "Name of the date",
  example: "Coffee Date",
};
const repeatingSchema = {
  type: "boolean",
  description: "Whether or not the date can be repeated",
  example: true,
};
const timeOfDaySchema = {
  type: "array",
  items: {
    type: "string",
  },
  description: "What time of day",
  example: ["Morning", "Afternoon", "Night"],
};
const dayOfWeekSchema = {
  type: "array",
  items: {
    type: "string",
  },
  description: "What days of week",
  example: ["Monday", "Tuesday", "Saturday"],
};
const petFriendlySchema = {
  type: "boolean",
  description: "Can we bring our dog? ",
  example: true,
};
const userIdSchema = {
  type: "string",
  description: "Unique id which mimics the $oid from Mongo",
  example: SAMPLE_USER_ID,
};
const cardIdSchema = {
  type: "string",
  description: "Unique id which mimics the $oid from Mongo",
  example: SAMPLE_CARD_ID,
};
const datetimeSchema = {
  type: "date-time",
  description: "Represents a unique moment in time using RFC 3339, ISO spec",
  example: "2018-03-20T09:12:28Z",
};
const isOvernightSchema = {
  type: "boolean",
  description: "Indicates if a date stretches over multiple days",
};
const isWeekendSchema = {
  type: "boolean",
  description: "Indicates if a date can take place on a weekend",
};
const isWeekdaySchema = {
  type: "boolean",
  description: "Indicates if a date can take place on a weekday",
};
const costSchema = {
  type: "integer",
  minimum: "0",
  maximum: "4",
  description: "Estimated cost associated with the date",
  example: 0,
};
const expiresSchema = {
  type: "boolean",
  description: "Indicates if the date comes with an expiration date",
  example: true,
};
const detailsSchema = {
  type: "string",
  description: "A marker for additional details regarding the date",
  example:
    "This date is very fancy, and will require special attire, reservations, and travel accomodations",
};
const gMapReferenceSchema = {
  type: "string",
  format: "uri",
  description: "A link to the Google Maps URL for this location",
  example: "https://goo.gl/maps/UiPK7MaEq5mRsVYr5",
};
const locationSchema = {
  type: "string",
  description:
    "A plaintext reference to a location where the date will be held",
  example: "Normandy Beach",
};
const _id = {
  type: "object",
  description: "MongoDB ID Type",
  example: { $oid: SAMPLE_CARD_ID },
};

const deleteCardResponse = {
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

const dateCardPayload = {
  public: publicSchema,
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

const postBodyRequestPayload = {
  type: "object",
  properties: {
    ...dateCardPayload,
  },
};

const errorSchema = {
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
};

module.exports = {
  deleteCardResponse,
  postBodyRequestPayload,
  dateCardPayload,
  errorSchema,
};
