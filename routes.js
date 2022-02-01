const express = require("express");
var bodyParser = require("body-parser");
const app = express();

const {
  listCollections,
  listDatabases,
  findUser,
  findCards,
  putDateCard,
  deleteCard,
} = require("./service");

const {
  PATHS,
  DATABASE_NAME,
  CARDS_COLLECTION,
  USERS_COLLECTION,
} = require("./constants");

const mongoClient = require("./clients/mongo_client");
const dbCursor = mongoClient.db(DATABASE_NAME);

module.exports = app;
