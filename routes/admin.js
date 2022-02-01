const express = require("express");
const mongoClient = require("../clients/mongo_client");
const { PATHS, USERS_COLLECTION, DATABASE_NAME } = require("../constants");
const { listCollections, listDatabases, findUser } = require("../service");
const router = express.Router();

const dbCursor = mongoClient.db(DATABASE_NAME);

router.get(PATHS.listCollections, async (req, res) => {
  res.send(await listCollections(mongoClient, req.params.database));
});

router.get(PATHS.listDatabases, async (req, res) => {
  res.send(await listDatabases(mongoClient));
});

router.get(PATHS.listUsers, async (req, res) => {
  res.send(await findUser(dbCursor.collection(USERS_COLLECTION)));
});

module.exports = router;
