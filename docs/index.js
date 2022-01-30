const { routes } = require("../servers");
const components = require("./components");
const info = require("./generalInfo");
const servers = require("./servers");
const tags = require("./tags");

module.exports = {
  ...info,
  ...servers,
  ...routes,
  ...tags,
  ...components,
};
