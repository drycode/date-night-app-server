require("dotenv").config({ path: ".env.development" });
const fs = require("fs");
const username = encodeURIComponent(process.env.USERNAME);
const password = encodeURIComponent(process.env.PASSWORD);
const mongoBaseURL = fs.existsSync("/.dockerenv")
  ? "mongodb"
  : encodeURIComponent(process.env.MONGO_BASE_URL);

const databaseName = encodeURIComponent(process.env.DATABASE_NAME);
const dbURI = `mongodb://${username}:${password}@${mongoBaseURL}:27017/${databaseName}`;
console.debug(dbURI);
module.exports = {
  dbURI,
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
