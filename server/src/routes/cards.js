const { PATHS, CARDS_COLLECTION, DATABASE_NAME } = require("../constants");
const express = require("express");
const router = express.Router();

const mongoClient = require("../clients/mongo_client");
const middleware = require("../middlewares");
const {
  findCards,
  putDateCard: createDateCard,
  deleteCard,
  updateDateCard,
} = require("../service");

const dbCursor = mongoClient.db(DATABASE_NAME);

router.use(PATHS.cards, middleware.isAuthenticated);

router.get(PATHS.cards, async (req, res) => {
  try {
    const result = await findCards(
      req.cookies.activeUser,
      dbCursor.collection(CARDS_COLLECTION)
    );
    res.send(result);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
});

router.post(PATHS.cards, async (req, res) => {
  try {
    const result = await createDateCard(req.cookies.activeUser, req.body);
    res.send(result);
  } catch (e) {
    if (e.name === "ValidationError") {
      console.log(e);
      res.status(400);
      res.send(e._message);
    } else {
      res.status = 500;
      res.send(e._message);
    }
  }
});

router.delete(PATHS.card, async (req, res) => {
  try {
    const result = await deleteCard(
      req.cookies.activeUser,
      dbCursor.collection(CARDS_COLLECTION),
      req.params.cardId
    );
    res.send(result);
  } catch (e) {
    res.status = 500;
    res.send(e);
  }
});

router.put(PATHS.card, async (req, res) => {
  try {
    const result = await updateDateCard(
      req.cookies.activeUser,
      req.params.cardId,
      req.body
    );
    res.send(result);
  } catch (e) {
    res.status = 400;
    res.send(e);
  }
});

module.exports = router;
