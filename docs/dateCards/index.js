const createCard = require("./create-card");
const deleteCard = require("./delete-card");
const getCard = require("./get-card");
const getCards = require("./get-cards");
const { PATHS } = require("../../constants");

let normalizePath = (key) => {
  return key.replace(":userId", "{userId}").replace(":id", "{id}");
};

const paths = {};
paths[normalizePath(PATHS.cards)] = {
  ...getCards,
  ...getCard,
  ...createCard,
};

paths[normalizePath(PATHS.card)] = {
  ...deleteCard,
};

module.exports = {
  paths,
};
