const mongoClient = require("./client")
const port = 3000
const app = require("./servers")


app.listen(port, async () => {
    await mongoClient.connect();
    console.log(`Example app listening at http://localhost:${port}`)
})
