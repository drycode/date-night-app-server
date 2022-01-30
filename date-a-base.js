const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs");
const mongoClient = require("./client");
const port = 3000;
const app = require("./servers");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, async () => {
  await mongoClient.connect();
  console.log(`Example app listening at http://localhost:${port}`);
});
