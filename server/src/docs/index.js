const components = require("./components");
const dateCards = require("./dateCards");
const auth = require("./auth");
const info = require("./generalInfo");
const security = require("./security");
const servers = require("./servers");
const tags = require("./tags");

module.exports = {
  ...info,
  ...servers,
  ...tags,
  ...components,
  paths: { ...auth.paths, ...dateCards.paths },
  ...security,
};
