import passport from "passport";
import * as GoogleStrategy from "passport-google-oauth20";
import * as GHStrategy from "passport-github2";
import * as FBStrategy from "passport-facebook";
// import GoogleStrategy from module passport-google-oauth20 as type module

const Google = GoogleStrategy.Strategy;
const Github = GHStrategy.Strategy;
const Facebook = FBStrategy.Strategy;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_SECRET;

const GITHUB_CLIENT_ID = process.env.GITHUB_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_SECRET;

const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_ID;
const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_SECRET;

// GOOGLE
passport.use(
  new Google({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    passReqToCallback: true,
  }),
  function (accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
);

// GITHUB
passport.use(
  new Github({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback",
  }),
  function (accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
);

// FACEBOOK
passport.use(
  new Facebook({
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: "/auth/facebook/callback",
  }),
  function (accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;
