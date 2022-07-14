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
  res.send(
    await findCards(
      req.cookies.activeUser,
      dbCursor.collection(CARDS_COLLECTION)
    )
  );
});

router.post(PATHS.cards, async (req, res) => {
  res.send(await createDateCard(req.cookies.activeUser, req.body));
});

router.delete(PATHS.card, async (req, res) => {
  res.send(
    await deleteCard(
      req.cookies.activeUser,
      dbCursor.collection(CARDS_COLLECTION),
      req.params.cardId
    )
  );
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
