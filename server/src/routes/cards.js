const { PATHS, CARDS_COLLECTION, DATABASE_NAME } = require("../constants");
const express = require("express");
const router = express.Router();

const mongoClient = require("../clients/mongo_client");
const middleware = require("../middlewares");
const { findCards, putDateCard, deleteCard } = require("../service");

const dbCursor = mongoClient.db(DATABASE_NAME);

router.use(middleware.verify);
router.get(PATHS.health, (req, res) => {
  res.send("Hello World!");
});

router.get(PATHS.cards, async (req, res) => {
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

router.post(PATHS.cards, async (req, res) => {
  res.send(
    await putDateCard(
      req.params.userId,
      dbCursor.collection(CARDS_COLLECTION),
      req.body
    )
  );
});

router.delete(PATHS.card, async (req, res) => {
  res.send(
    await deleteCard(
      req.params.userId,
      dbCursor.collection(CARDS_COLLECTION),
      req.params.id
    )
  );
});

module.exports = router;
