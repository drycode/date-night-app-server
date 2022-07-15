const createCard = require("./create-card");
const deleteCard = require("./delete-card");
const getCards = require("./get-cards");
const updateCard = require("./update-card");
const { PATHS } = require("../../constants");
const health = require("./health");
const { normalizePath } = require("../../helpers");

const paths = {};
paths[normalizePath(PATHS.health)] = {
  ...health,
};

paths[normalizePath(PATHS.cards)] = {
  ...getCards,
  ...createCard,
};

paths[normalizePath(PATHS.card)] = {
  ...deleteCard,
  ...updateCard,
};

module.exports = {
  paths,
};
