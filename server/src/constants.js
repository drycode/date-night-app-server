require("dotenv").config({ path: ".env.development" });
const fs = require("fs");
const username = encodeURIComponent(process.env.USERNAME);
const password = encodeURIComponent(process.env.PASSWORD);
const mongoBaseURL = fs.existsSync("/.dockerenv")
  ? "mongodb"
  : encodeURIComponent(process.env.MONGO_BASE_URL);
const encryptionRounds = Number(process.env.ENCRYPTION_ROUNDS);
const databaseName = encodeURIComponent(process.env.DATABASE_NAME);
const dbURI = `mongodb://${username}:${password}@${mongoBaseURL}:27017/${databaseName}`;
console.debug(dbURI);
const dateCard = "datecard";
const user = "user";
module.exports = {
  dbURI,
  PATHS: {
    cards: "/dates",
    card: "/dates/:cardId",
    health: "/health",
    swaggerURI: "/api-docs",
    listCollections: "/:database/collections",
    listUsers: "/users",
    listDatabases: "/databases",
    apiBase: "/api/v1",
    auth: "/auth",
  },
  DATABASE_NAME: "primaryDateNightDb",
  CARDS_COLLECTION: `${dateCard}s`,
  USERS_COLLECTION: `${user}s`,
  dateCard,
  user,
  encryptionRounds,
};
