const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtInstance = {
  encryptPassword: (password) =>{
    return bcrypt.hashSync(password, 10)
  },
  tokenGenerator: (userId, expiresIn) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET_KIWI, {
      expiresIn: expiresIn,
    });
  },
  signToken: (userId, name, email, expiresIn) => {
    return  jwt.sign({ id: userId, name: name, email: email }, process.env.JWT_SECRET_KIWI,
      {
        expiresIn: expiresIn,
      }
    );
  },
  refreshToken: (userId, name, email, expiresIn) => {
    return  jwt.sign({ id: userId, name: name, email: email }, process.env.REFRESH_JWT_SECRET_KIWI,
      {
        expiresIn: expiresIn,
      }
    );
  },
  tokenDecoder: (token) => {
    return jwt.verify(token, process.env.REFRESH_JWT_SECRET_KIWI)
  },
  verifyToken: (token) => {
    return jwt.verify(token, process.env.JWT_SECRET_RESET_KIWI)
  }

}

module.exports = {
  jwtInstance
}