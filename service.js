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

async function findAllCards(cards) {
  const documents = await cards.find();
  return documents.toArray();
}

async function putDateCard(cards, payload) {
  return await cards.insertOne(payload);
}

async function deleteCard(cards, _id) {
  return await cards.deleteOne({ _id: new mongodb.ObjectId(_id) });
}

module.exports = {
  listCollections,
  listDatabases,
  findUser,
  findAllCards,
  putDateCard,
  deleteCard,
};
