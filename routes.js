const express = require("express");
var bodyParser = require("body-parser");
const app = express();
var jsonParser = bodyParser.json();

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

app.get(PATHS.health, (req, res) => {
  res.send("Hello World!");
});

app.get(PATHS.listCollections, async (req, res) => {
  res.send(await listCollections(mongoClient, req.params.database));
});

app.get(PATHS.listDatabases, async (req, res) => {
  res.send(await listDatabases(mongoClient));
});

app.get(PATHS.listUsers, async (req, res) => {
  res.send(await findUser(dbCursor.collection(USERS_COLLECTION)));
});

app.get(PATHS.cards, async (req, res) => {
  res.send(
    await findCards(
      req.params.userId,
      dbCursor.collection(CARDS_COLLECTION),
      req.query.name,
      req.query.repeating ? req.query.repeating === "true" : null,
      Number(req.query.budgetInDollars),
      req.query.timeOfDay,
      req.query.dayOfWeek,
      req.query.petFriendly ? req.query.petFriendly === "true" : null
    )
  );
});

app.post(PATHS.cards, jsonParser, async (req, res) => {
  res.send(
    await putDateCard(
      req.params.userId,
      dbCursor.collection(CARDS_COLLECTION),
      req.body
    )
  );
});

app.delete(PATHS.card, jsonParser, async (req, res) => {
  res.send(
    await deleteCard(
      req.params.userId,
      dbCursor.collection(CARDS_COLLECTION),
      req.params.id
    )
  );
});

module.exports = app;
