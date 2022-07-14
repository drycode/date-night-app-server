const jwt = require("jsonwebtoken");
const tokenSecret = process.env.TOKEN_SECRET;

exports.verify = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) res.status(403).json({ error: "please provide a token" });
  else {
    jwt.verify(token.split(" ")[1], tokenSecret, (err, value) => {
      if (err) res.status(500).json({ error: "failed to authenticate token" });
      req.user = value.data;
      next();
    });
  }
};

exports.isAuthenticated = (req, res, next) => {
  if (!req.cookies) {
    throw "The request didn't have any cookies";
  } else if (!req.cookies.activeUser || !req.cookies.accessToken) {
    throw "Missing activeUser or accessToken in cookies";
  } else if (
    false // TODO: access token is not valid
  ) {
    // Access token expired
    // Decoded Access token mismatched with active user
    res.status(403).send("Not authorized to view the requested resource");
  }
  next();
};
