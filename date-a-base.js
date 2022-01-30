const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs");
const mongoClient = require("./clients/mongo_client");
const port = 3000;
const app = require("./routes");
const { PATHS } = require("./constants");

app.use(PATHS.swaggerURI, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, async () => {
  await mongoClient.connect();
  console.log(`Example app listening at http://localhost:${port}`);
});
