const express = require("express");
const fs = require("fs");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs");
const mongoClient = require("./clients/mongo_client");
const port = 3000;
const app = require("./routes");
const { PATHS, dbURI } = require("./constants");
const compression = require("compression");
const helmet = require("helmet");
const morgan = require("morgan");

const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const adminRoute = require("./routes/admin");
const cardsRoute = require("./routes/cards");

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on("error", (err) => {
  console.error(err);
});

app.use(morgan("tiny"));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/admin", adminRoute);
app.use(PATHS.apiBase, cardsRoute);
app.use(PATHS.swaggerURI, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(compression());
app.use(helmet());

let data = JSON.stringify(swaggerDocument);
fs.writeFileSync("swagger.json", data);

app.listen(port, async () => {
  await mongoClient.connect();
  console.log(`Example app listening at http://localhost:${port}`);
});
