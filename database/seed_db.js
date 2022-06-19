const dotenv = require("dotenv");
dotenv.config({
  path: "./server/.env.development",
});
const User = require("../server/src/models/user.js");
const dateCard = require("../server/src/models/dateCard.js");

const { dbURI } = require("../server/src/constants");
const mongoose = require("mongoose");

const { randomInt } = require("crypto");
const { forEach } = require("lodash");

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const dates = [
  {
    name: "take hazel to the dog park",
    details: "and get a pup cup on the way home",
    location: "rockwood park",
    gMapReference: "https://goo.gl/maps/BWzsQH1JKpfu9C9C9",
  },
  {
    name: "get ice cream from scoops",
    location: "scoop",
    gMapReference: null,
    details: null,
  },
  {
    name: "take a pottery class",
    location: "hand thrown",
    repeating: false,
    timeOfDay: ["evening"],
    petFriendly: false,
    gMapReference: null,
    details: null,
  },
  {
    name: "get sushi",
    repeating: true,
    timeOfDay: ["evening"],
    petFriendly: false,
    gMapReference: null,
    details: null,
  },
  {
    name: "movie night",
    repeating: true,
    timeOfDay: ["evening"],
    location: "home",
    petFriendly: true,
    gMapReference: null,
    details: null,
  },
];

let id = 1;

const newUser = User({
  email: "johnsmith@hotmail.com",
  password: "12345",
});

newUser
  .save()
  .then((res) => {
    console.log(res);

    forEach(dates, (date) => {
      let card = {
        id: id,
        public: id % 7 ? false : true,
        owner: newUser._id,
        createdBy: newUser._id,
        name: "take hazel to the dog park",
        details: "and get a pup cup on the way home",
        location: "rockwood park",
        gMapReference: "https://goo.gl/maps/BWzsQH1JKpfu9C9C9",
        repeatable: id % 5 ? false : true,
        timeOfDay: ["morning", "afternoon", "evening"],
        overnight: (id + 1) % 7 ? false : true,
        weekend: (id + 3) % 3 ? false : true,
        weekday: id % 2 ? false : true,
        estimatedCost: randomInt(0, 4),
        petFriendly: (id + 1) % 7 ? true : false,
        expires: (id + 3) % 7 ? new Date(2023, 1, 1, 1, 1, 1, 1) : null,
      };
      card = { ...card, ...date };
      dateCard(card)
        .save()
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      id += 1;
    });
  })
  .catch((err) => console.error(err));
