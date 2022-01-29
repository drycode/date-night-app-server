const {
  listCollections,
  listDatabases,
  findUser,
  findAllCards,
  putDateCard,
  deleteCard,
} = require("./service");
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

app.get("/dateCards", async (req, res) => {
  res.send(await findAllCards(dbCursor.collection("dateNightCards")));
});

app.post("/dateCards/card", jsonParser, async (req, res) => {
  console.log(req.body);
  res.send(await putDateCard(dbCursor.collection("dateNightCards"), req.body));
  //   res.send("ok");
});

app.delete("/dateCards/card/:id", jsonParser, async (req, res) => {
  console.log("Delete: ", req.params);
  res.send(
    await deleteCard(dbCursor.collection("dateNightCards"), req.params.id)
  );
});

module.exports = app;
