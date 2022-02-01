const express = require("express");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs");
const mongoClient = require("./clients/mongo_client");
const port = 3000;
const app = require("./routes");
const { PATHS } = require("./constants");
const compression = require("compression");
const helmet = require("helmet");

const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const adminRoute = require("./routes/admin");
const cardsRoute = require("./routes/cards");

const username = encodeURIComponent(process.env.USERNAME);
const password = encodeURIComponent(process.env.PASSWORD);
const databaseName = encodeURIComponent(process.env.DATABASE_NAME);
const dbURI = `mongodb+srv://${username}:${password}@date-a-base-dev.v70g8.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on("error", (err) => {
  console.error(err);
});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/admin", adminRoute);
app.use(PATHS.apiBase, cardsRoute);
app.use(PATHS.swaggerURI, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(compression());
app.use(helmet());

app.listen(port, async () => {
  await mongoClient.connect();
  console.log(`Example app listening at http://localhost:${port}`);
});
