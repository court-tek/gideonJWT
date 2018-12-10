const passport = require("passport");
const User = require("../sequelize");
const keys = require("../config/keys");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local Strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions , (email, password, done) => {
  // Verify this email and password, call done with the user
  // if it is the correct  username and password
  // otherwise, call done with false
  User.findOne({
    where: {
      email: email
    }
  }).then((err, User) => {
      if (err) { return done(err); }
      if (user) { return done(null, false); }

      // compare passwords - is password equal to user password?
      User.comparePassword(password, function(err, isMatch) {
        if (err) { return done(err) }
        if (!isMatch) { return done(null, false) }

        return done(null, User);
      });
  });
})

// setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: keys.secret
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user ID in the payload exists in our database
  // If it does , call 'done' with that user
  // otherwise, call done without a user objeect
  try {
    User.findOne({
      where: { id: payload.sub }
    }).then(function(err, user) {
      if (err) {
        return done(err, false);
      }

      if (User) {
        done(null, User);
      } else {
        done(null, false);
      }
    });
  } catch (err) {
    done(err);
  }
});

// Tell passport to use Strategy
passport.use(jwtLogin);
passport.use(localLogin);
