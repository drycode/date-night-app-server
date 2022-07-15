const User = require("./user");
const dateCard = require("./dateCard");

const makeDateCard = (
  { owner, createdBy, name, details, location },
  defaultCard = {
    public: false,
    gMapReference: null,
    repeatable: false,
    timeOfDay: ["morning", "afternoon", "evening"],
    overnight: false,
    weekend: true,
    weekday: true,
    estimatedCost: 0,
    petFriendly: false,
    expires: null,
  }
) => {
  const card = {
    owner,
    createdBy,
    name,
    details,
    location,
    ...defaultCard,
  };
  return dateCard(card);
};

const makeUser = ({ email, hashedPassword }) => {
  return User({ email, password: hashedPassword });
};

module.exports = {
  makeUser,
  makeDateCard,
};
