const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/user");

const encryptionRounds = process.env.ENCRYPTION_ROUNDS;
const tokenSecret = process.env.TOKEN_SECRET;

const jwt = require("jsonwebtoken");

const middleware = require("../middlewares");

router.get("/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user)
        res.status(404).json({ error: "no user with that email found" });
      else {
        bcrypt.compare(req.body.password, user.password, (error, match) => {
          if (error) res.status(500).json(error);
          else if (match) res.status(200).json({ token: generateToken(user) });
          else res.status(403).json({ error: "passwords do not match" });
        });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.post("/signup", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      res.send(`User: ${user.email} already exists...`);
    } else {
      bcrypt.hash(req.body.password, encryptionRounds, (error, hash) => {
        if (error) res.status(500).json(error);
        else {
          const newUser = User({ email: req.body.email, password: hash });
          newUser
            .save()
            .then((user) => {
              res.status(200).json({ token: generateToken(user) });
            })
            .catch((error) => {
              res.status(500).json(error);
            });
        }
      });
    }
  });
});

router.get("/jwt-test", middleware.verify, (req, res) => {
  res.status(200).json(req.user);
});

function generateToken(user) {
  return jwt.sign(
    { data: { id: user._id, email: user.email }, iss: "date-a-base" },
    tokenSecret,
    {
      expiresIn: "24h",
    }
  );
}

module.exports = router;
