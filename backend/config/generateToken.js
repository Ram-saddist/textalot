const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "textalot", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;