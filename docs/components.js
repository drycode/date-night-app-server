const _id = {
  type: "object",
  description: "MongoDB ID Type",
  example: { $oid: "12hg34md5j3233ba" },
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
          userId: { $ref: "#/components/schemas/_id" },
        },
      },
      Error: {
        type: "object", //data type
        properties: {
          message: {
            type: "string", // data type
            description: "Error message", // desc
            example: "Not found", // example of an error message
          },
          internal_code: {
            type: "string", // data type
            description: "Error internal code", // desc
            example: "Invalid parameters", // example of an error internal code
          },
        },
      },
    },
  },
};
