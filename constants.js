module.exports = {
  PATHS: {
    cards: "/:userId/dateCards",
    card: "/:userId/dateCards/:cardId",
    health: "/health",
    swaggerURI: "/api-docs",
    listCollections: "/:database/collections",
    listUsers: "/users",
    listDatabases: "/databases",
  },
  DATABASE_NAME: "primaryDateNightDb",
  CARDS_COLLECTION: "dateNightCards",
  USERS_COLLECTION: "user",
};
