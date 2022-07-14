const SAMPLE_USER_ID = "1";
const SAMPLE_CARD_ID = "61f5826a43f7ac76d74903aa";

module.exports = {
  publicSchema: {
    type: "boolean",
    description: "Indicates whether a date is meant to be shared",
  },
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
  datetimeSchema: {
    type: "date-time",
    description: "Represents a unique moment in time using RFC 3339, ISO spec",
    example: "2018-03-20T09:12:28Z",
  },
  isOvernightSchema: {
    type: "boolean",
    description: "Indicates if a date stretches over multiple days",
  },
  isWeekendSchema: {
    type: "boolean",
    description: "Indicates if a date can take place on a weekend",
  },
  isWeekdaySchema: {
    type: "boolean",
    description: "Indicates if a date can take place on a weekday",
  },
  costSchema: {
    type: "integer",
    minimum: "0",
    maximum: "4",
    description: "Estimated cost associated with the date",
    example: 0,
  },
  expiresSchema: {
    type: "boolean",
    description: "Indicates if the date comes with an expiration date",
    example: true,
  },
  detailsSchema: {
    type: "string",
    description: "A marker for additional details regarding the date",
    example:
      "This date is very fancy, and will require special attire, reservations, and travel accomodations",
  },
  gMapReferenceSchema: {
    type: "string",
    format: "uri",
    description: "A link to the Google Maps URL for this location",
    example: "https://goo.gl/maps/UiPK7MaEq5mRsVYr5",
  },
  locationSchema: {
    type: "string",
    description:
      "A plaintext reference to a location where the date will be held",
    example: "Normandy Beach",
  },
  _id: {
    type: "object",
    description: "MongoDB ID Type",
    example: { $oid: SAMPLE_CARD_ID },
  },
};
