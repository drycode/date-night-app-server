const axios = require("axios");
const headers = { "Content-Type": "application/json" };
const url = "http://localhost:3000/dateCards/card";
const doc = {
  name: "get ice cream from scoops",
  repeating: true,
  budgetInDollars: 15,
  timeOfDay: ["afternoon", "evening"],
  dayOfWeek: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  petFriendly: false,
};

axios
  .post(url, doc, { headers })
  .then((res) => {
    console.log(res.data);
    axios
      .delete(url + `/${res.data.insertedId}`, doc, { headers })
      .then((res2) => {
        console.log(res2.data);
      });
  })
  .catch((err) => {
    // console.log(err);
  });
