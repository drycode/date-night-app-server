const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs");
const mongoClient = require("./clients/mongo_client");
const port = 3000;
const app = require("./routes");
const { PATHS } = require("./constants");
const compression = require("compression");
const helmet = require("helmet");

app.use(
  PATHS.swaggerURI,
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument),
  compression(),
  helmet()
);

app.listen(port, async () => {
  await mongoClient.connect();
  console.log(`Example app listening at http://localhost:${port}`);
});
