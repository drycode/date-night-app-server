module.exports = {
  post: {
    tags: ["Log out Active User"],
    description: "Logout User",
    operationId: "logout",

    responses: {
      200: {
        description: "Deactivated Active User",
        content: {
          "application/json": {
            schema: {
              msg: "Active user's cookies have been removed from browser",
            },
          },
        },
      },
    },
  },
};
