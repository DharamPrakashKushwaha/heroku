const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "7060066674-uunmpvsegkje5q4qm589nnqt358i8457.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:4000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, next) => {
      //callback
      console.log('PROFILE', profile);
      next();
    }
  )
);
