const createCard = require("./create-card");
const deleteCard = require("./delete-card");
const getCard = require("./get-card");
const getCards = require("./get-cards");
const { PATHS } = require("../../constants");
const health = require("./health");

let normalizePath = (key) => {
  let array = key.split("/");
  array.forEach((item, i) => {
    if (item[0] == ":") {
      array[i] = `{${item.slice(1, item.length)}}`;
    }
  });
  return array.join("/");
};

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
};

module.exports = {
  paths,
};
