const mongoose = require("mongoose");
const { user } = require("../constants");
const model = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model(user, model);
