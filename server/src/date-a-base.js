const express = require("express");
const fs = require("fs");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs");
const mongoClient = require("./clients/mongo_client");
const port = 3000;

const { PATHS, dbURI } = require("./constants");
const compression = require("compression");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const adminRoute = require("./routes/admin");
const cardsRoute = require("./routes/cards");
const healthRoute = require("./routes/health");
const cors = require("cors");

const http = require('http');
const https = require('https');
const privateKey  = fs.readFileSync('/new_certs/tls.key', 'utf8');
const certificate = fs.readFileSync('/new_certs/tls.crt', 'utf8');

const credentials = {key: privateKey, cert: certificate};

const httpsServer = https.createServer(credentials, app);


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on("error", (err) => {
  console.error(err);
});

app.use(morgan("tiny"));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:8080",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true,
  })
);

app.use(cookieParser());
app.use(
  PATHS.apiBase + PATHS.swaggerURI,
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);
app.use(PATHS.apiBase + PATHS.auth, authRoute);
app.use(PATHS.apiBase + PATHS.health, healthRoute);
app.use("/admin", adminRoute);
app.use(PATHS.apiBase, cardsRoute);

app.use(compression());
app.use(helmet());

let data = JSON.stringify(swaggerDocument);
fs.writeFileSync("swagger.json", data);


httpsServer.listen(3000, async () => {
  await mongoClient.connect();

  console.log(`Example app listening at http://localhost:${port}`);
});
