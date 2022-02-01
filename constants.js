module.exports = {
  PATHS: {
    cards: "/:userId/dateCards",
    card: "/:userId/dateCards/:cardId",
    health: "/health",
    swaggerURI: "/api-docs",
    listCollections: "/:database/collections",
    listUsers: "/users",
    listDatabases: "/databases",
    apiBase: "/api/v1",
  },
  DATABASE_NAME: "primaryDateNightDb",
  CARDS_COLLECTION: "dateNightCards",
  USERS_COLLECTION: "users",
};
