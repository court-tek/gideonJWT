const jwt = require('jwt-simple');
const User = require("../sequelize");
const bcrypt = require('bcrypt');
const keys = require('../config/keys');

function tokenForUser(User) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: User.id, iat: timestamp }, keys.secret);
}

const BCRYPT_SALT_ROUNDS = 12;
exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  // Check if fields are fiiled
  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password' });
  }

  // See if user with given email exists
  User.findOne({
    where: {
      email: email
    }
  }).then(function(user) {
    if (user != null) {
      console.log("user already taken");
      res.json("username already taken");
    } else {
      bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(function(hashedPassword) {
        console.log(hashedPassword);
        User.create({
          email: email,
          password: hashedPassword
        })
      })
    .then(function() {
        console.log("user created");
         res.json({ token: tokenForUser(User) });
      });
    }
  });
};
