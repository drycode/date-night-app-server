const {
  listCollections,
  listDatabases,
  findUser,
  findAllCards,
  putDateCard,
  deleteCard,
} = require("./service");
const { PATHS } = require("./constants");
const mongoClient = require("./client");
const express = require("express");
var bodyParser = require("body-parser");

const app = express();
const database = "primaryDateNightDb";

var jsonParser = bodyParser.json();

const dbCursor = mongoClient.db(database);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/:database/collections", async (req, res) => {
  res.send(await listCollections(mongoClient, req.params.database));
});

app.get("/databases", async (req, res) => {
  res.send(await listDatabases(mongoClient));
});

app.get("/users", async (req, res) => {
  res.send(await findUser(dbCursor.collection("user")));
});

app.get(PATHS.cards, async (req, res) => {
  res.send(
    await findAllCards(req.params.userId, dbCursor.collection("dateNightCards"))
  );
});

app.post(PATHS.card, jsonParser, async (req, res) => {
  console.log(req.body);
  res.send(
    await putDateCard(
      req.params.userId,
      dbCursor.collection("dateNightCards"),
      req.body
    )
  );
});

app.delete("/:userId/dateCards/card/:id", jsonParser, async (req, res) => {
  console.log("Delete: ", req.params);
  res.send(
    await deleteCard(
      req.params.userId,
      dbCursor.collection("dateNightCards"),
      req.params.id
    )
  );
});

module.exports = app;
