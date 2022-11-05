const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { makeUser } = require("../models/builders");
const User = require("../models/user");
const { encryptionRounds } = require("../constants");
const tokenSecret = process.env.TOKEN_SECRET;
const { PATHS } = require("../constants");

const jwt = require("jsonwebtoken");

const { verify } = require("../helpers");

const ACTIVE_USER = "activeUser";
const ACCESS_TOKEN = "accessToken";

const logUserIn = (req, res, user, submittedPassword) => {
  bcrypt.compare(submittedPassword, user.password, (error, match) => {
    if (error) {
      clearCookies(res);
      console.log(error);
      res.status(500).json(error._message);
    } else if (match) {
      const token = generateToken(user);
      console.log("Edits are working as expected");
      res
        .status(200)
        .cookie(ACTIVE_USER, encodeURIComponent(user._id), {
	  httpOnly: true,
	  secure: true,
          sameSite: "none",
          encode: String,
	  expire: 360000 + Date.now()
        })
        .cookie(ACCESS_TOKEN, token, { 
		httpOnly: true, 
		sameSite: "none", 
		secure: true, 
		expire: 360000 + Date.now()
 	})

        .json({ token: token, userId: user._id });
    } else res.status(403).json({ error: "passwords do not match" });
  });
};

const clearCookies = (res) => {
  res.clearCookie(ACTIVE_USER);
  res.clearCookie(ACCESS_TOKEN);
};

router.post(PATHS.logout, (_, res) => {
  clearCookies(res);
  res
    .status(200)
    .json({ msg: "Active user's cookies have been removed from browser" });
});

router.get(PATHS.login, (req, res) => {
  clearCookies(res);
  User.findOne({ email: req.query.username })
    .then((user) => {
      if (!user) {
        res.status(404).json({ error: "no user with that email found" });
      } else {
        logUserIn(req, res, user, req.query.password);
      }
    })
    .catch((error) => {
      console.debug(error);
      res.status(500).json(error._message);
    });
});

router.post(PATHS.login, (req, res) => {
  User.findOne({ email: req.body.username }).then((user) => {
    if (user) {
      logUserIn(req, res, user, req.body.password);
    } else {
      console.log(encryptionRounds);
      bcrypt.hash(req.body.password, encryptionRounds, (error, hash) => {
        if (error) {
          console.debug(error);
          res.status(500).json(error);
        } else {
          const newUser = makeUser({
            email: req.body.username,
            hashedPassword: hash,
          });
          newUser
            .save()
            .then((user) => {
              res.status(201).json({ user, token: generateToken(user) });
            })
            .catch((error) => {
              console.debug(error);
              res.status(500).json(error);
            });
        }
      });
    }
  });
});

router.post(PATHS.jwtTest, (req, res) => {
  console.log(req.body);
  try {
    const decryptedToken = { value: null };
    verify(
      req.body.activeUser,
      req.body.accessToken.split(" ")[1],
      decryptedToken
    );
    res.status(200).json(decryptedToken);
  } catch (e) {
    console.log(e);
    res.status(403).json({ error: e });
  }
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
