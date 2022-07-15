const { MongoClient } = require("mongodb");
const { dbURI } = require("../constants");

console.debug(dbURI);

const mongoClient = new MongoClient(dbURI);

module.exports = mongoClient;
