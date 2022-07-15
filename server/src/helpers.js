const jwt = require("jsonwebtoken");
const tokenSecret = process.env.TOKEN_SECRET;

let normalizePath = (key) => {
  let array = key.split("/");
  array.forEach((item, i) => {
    if (item[0] == ":") {
      array[i] = `{${item.slice(1, item.length)}}`;
    }
  });
  return array.join("/");
};

let verify = (user, token, decryptedToken) => {
  if (!token) throw "please provide a token";
  else {
    try {
      jwt.verify(token, tokenSecret, (err, value) => {
        if (err) {
          console.log(err);
          throw "failed to authenticate token";
        }
        if (user !== value.data.id) {
          throw "activeUser cookie doesn't match accessToken user";
        }
        decryptedToken.value = value;
      });
    } catch (e) {
      throw "Something went wrong when parsing the token";
    }
  }
};

module.exports = { normalizePath, verify };
