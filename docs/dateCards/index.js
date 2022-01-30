const deleteCard = require("./delete-card");
const getCard = require("./get-card");
const getCards = require("./get-cards");

module.exports = {
  paths: {
    "/:userId/dateCards": {
      ...getCards,
      ...getCard,
    },
    "/:userId/dateCards/:id": {
      ...deleteCard,
    },
  },
};
