const User = require("../sequelize");

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

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
      User.create({
        email: email,
        password: password
      }).then(function() {
        console.log("user created");
        res.json("user create")
      });
    }
  });
};
