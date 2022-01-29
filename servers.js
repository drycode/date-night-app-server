const { listCollections, listDatabases, findUser, findAllCards } = require("./service")
const mongoClient = require("./client")
const express = require('express')
const app = express()

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
    res.send(await findUser(mongoClient.db(database).collection("user")))
})

app.get('/dateCards', async (req, res) => {
    res.send(await findAllCards(mongoClient.db(database).collection("dateNightCards")))
})


module.exports = app;