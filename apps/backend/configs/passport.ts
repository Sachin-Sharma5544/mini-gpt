import { Strategy as GitHubStrategy } from "passport-github2";
import User from "../models/User";
import dotenv from "dotenv";

dotenv.config();

const setupPassport = (passport) => {
    passport.use(
        new GitHubStrategy(
            {
                clientID: process.env.GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_CLIENT_SECRET,
                callbackURL: process.env.GITHUB_CALLBACK_URL,
            },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    const existingUser = await User.findOne({
                        githubId: profile.id,
                    });
                    if (existingUser) return done(null, existingUser);

                    const newUser = new User({
                        githubId: profile.id,
                        username: profile.username,
                        displayName: profile.displayName,
                        email: "",
                        avatar: profile.photos[0].value,
                    });

                    await newUser.save();
                    done(null, newUser);
                } catch (err) {
                    done(err);
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
        } catch (err) {
            done(err);
        }
    });
};

export default setupPassport;
