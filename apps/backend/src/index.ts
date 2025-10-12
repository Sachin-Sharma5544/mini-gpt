import { log } from "@repo/logger";
import { createServer } from "./server";
import mongoose from "mongoose";
import passport from "passport";
import session from "express-session";

import dotenv from "dotenv";

import setupPassport from "../configs/passport";
import authRoutes from "../routes/auth";

const port = process.env.PORT || 5001;
const server = createServer();

dotenv.config();
log(process.env.CLIENT_URL, "Client URL");

// Session middleware (needed for passport)
server.use(
    session({ secret: "keyboard cat", resave: false, saveUninitialized: true })
);

// Passport
setupPassport(passport);
server.use(passport.initialize());
server.use(passport.session());

server.use("/auth", authRoutes);

mongoose
    .connect(process.env.MONGO_URI!)
    .then(() => {
        log("DB connected");
        server.listen(port, () => {
            log(`api running on ${port}`);
        });
    })
    .catch((error) => {
        log("Some error occured starting server", error);
    });
