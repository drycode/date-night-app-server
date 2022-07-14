const mongodb = require("mongodb");
const { dateCard } = require("./constants");
const DC = require("./models/dateCard");
const { makeDateCard } = require("./models/builders");

async function listDatabases(client) {
  const databasesList = await client
    .db()
    .admin()
    .listDatabases();
  return databasesList.databases;
}

async function listCollections(client, database) {
  const collections = await client.db(database).listCollections();
  return collections.toArray();
}

async function findUser(users) {
  const document = await users.findOne();
  return document;
}

async function findCards(owner, cardsCollectionCursor) {
  console.log(owner);
  const filter = { owner: mongodb.ObjectId(owner) };
  const documents = await cardsCollectionCursor.find(filter);
  return documents.toArray();
}

async function putDateCard(userId, payload) {
  const newCard = makeDateCard({
    owner: userId,
    createdBy: userId,
    ...payload,
  });

  const res = await newCard.save();
  return res;
}

async function deleteCard(userId, cards, cardId) {
  const _id = mongodb.ObjectId(cardId);
  userId = mongodb.ObjectId(userId);
  const existingCard = await cards.findOne({ _id });

  if (!existingCard) return `Card with id: ${_id.toJSON()} could not be found`;
  if (existingCard.owner.toJSON() !== userId.toJSON())
    return "Could not delete card, as ownerId does not match userId";
  return await cards.deleteOne({ _id, owner: userId });
}

async function updateDateCard(userId, cardId, payload) {
  let result = null;

  result = await DC.findByIdAndUpdate(mongodb.ObjectId(cardId), payload, {
    new: true,
  });
  if (!result) {
    throw `Card with id: ${cardId} could not be found`;
  }

  return result;
}

module.exports = {
  listCollections,
  listDatabases,
  findUser,
  findCards,
  putDateCard,
  deleteCard,
  updateDateCard,
};
