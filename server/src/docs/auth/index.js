const login = require("./login");
const logout = require("./logout");
const signup = require("./signup");
const testAuth = require("./test-auth");

const { PATHS } = require("../../constants");
const { normalizePath } = require("../../helpers");

const paths = {};
paths[normalizePath(PATHS.auth + PATHS.login)] = {
  ...login,
  ...signup,
};

paths[normalizePath(PATHS.auth + PATHS.logout)] = {
  ...logout,
};

paths[normalizePath(PATHS.auth + PATHS.jwtTest)] = {
  ...testAuth,
};

module.exports = {
  paths,
};
