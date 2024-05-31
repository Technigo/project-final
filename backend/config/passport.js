import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/User";

passport.use(
  new LocalStrategy(
    { usernameField: "username" },
    async (username, password, done) => {
      console.log("Incoming login request:", { username, password });
      try {
        const user = await User.findOne({ username });
        if (!user) {
          console.error("User not found");
          return done(null, false, { message: "Incorrect username." });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
          console.error("Incorrect password");
          return done(null, false, { message: "Incorrect password." });
        }

        console.log("Authentication successful");
        return done(null, user);
      } catch (error) {
        console.error("Error during authentication:", error);
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export default passport;
