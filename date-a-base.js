const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const Admin = mongoose.mongo.Admin;
const express = require('express')
const app = express()
const port = 3000
const database = "primaryDateNightDb";
require('dotenv').config();

const username = encodeURIComponent(process.env.USERNAME);
const password = encodeURIComponent(process.env.PASSWORD);

const uri = `mongodb+srv://${username}:${password}@date-a-base-dev.v70g8.mongodb.net/?retryWrites=true&w=majority`;
const mongoClient = new MongoClient(uri);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/:database/collections", async (req, res) => {
    res.send(await listCollections(mongoClient, req.params.database))
})

app.get('/databases', async (req, res) => {
    res.send(await listDatabases(mongoClient))
})


app.get('/users', async (req, res) => {
    res.send(findUser(mongoClient.db(database).collection("user")))
})


async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => { console.log(` -- ${db.name}`) })
    return databasesList.databases
};

async function listCollections(client, database) {
    collections = await client.db(database).listCollections();
    return collections.toArray();
}

async function findUser(users) {
    document = await users.findOne();
    console.log(document);
}



app.listen(port, async () => {
    await mongoClient.connect();
    console.log(`Example app listening at http://localhost:${port}`)
    // await mongoClient.close();
})

