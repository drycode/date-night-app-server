const mongodb = require("mongodb");

async function listDatabases(client) {
  const databasesList = await client
    .db()
    .admin()
    .listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach((db) => {
    console.log(` -- ${db.name}`);
  });
  return databasesList.databases;
}

async function listCollections(client, database) {
  const collections = await client.db(database).listCollections();
  return collections.toArray();
}

async function findUser(users) {
  const document = await users.findOne();
  console.log(document);
  return document;
}

async function findCards(
  userId,
  cards,
  name = null,
  repeating = false,
  budgetInDollars = NaN,
  timeOfDay = null,
  dayOfWeek = null,
  petFriendly = false
) {
  const filter = { userId };
  if (name !== null) {
    filter.name = name;
  }
  if (repeating !== null) {
    filter.repeating = repeating;
  }
  if (!isNaN(budgetInDollars)) {
    filter.budgetInDollars = budgetInDollars;
  }
  if (timeOfDay !== null) {
    filter.timeOfDay = { $all: timeOfDay };
  }
  if (dayOfWeek !== null) {
    filter.dayOfWeek = { $all: dayOfWeek };
  }
  if (petFriendly !== null) {
    filter.petFriendly = petFriendly;
  }
  console.log(filter);
  const documents = await cards.find(filter);
  return documents.toArray();
}

async function putDateCard(userId, cards, payload) {
  return await cards.insertOne({ userId, ...payload });
}

async function deleteCard(userId, cards, _id) {
  return await cards.deleteOne({ _id: new mongodb.ObjectId(_id), userId });
}

module.exports = {
  listCollections,
  listDatabases,
  findUser,
  findCards,
  putDateCard,
  deleteCard,
};
