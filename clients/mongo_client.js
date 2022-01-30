const { MongoClient } = require("mongodb");

require("dotenv").config();

const username = encodeURIComponent(process.env.USERNAME);
const password = encodeURIComponent(process.env.PASSWORD);

const uri = `mongodb+srv://${username}:${password}@date-a-base-dev.v70g8.mongodb.net/?retryWrites=true&w=majority`;
const mongoClient = new MongoClient(uri);

module.exports = mongoClient;
