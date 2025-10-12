import { Router } from "express";
import passport from "passport";

const router = Router();

router.get(
    "/github",
    passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
    "/github/callback",
    passport.authenticate("github", {
        failureRedirect: "/",
        session: true,
    }),
    (req, res) => {
        res.redirect(process.env.CLIENT_URL + "/dashboard"); // redirect to frontend after login
    }
);

router.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) return res.status(500).json({ message: "Error logging out" });
        res.redirect(process.env.CLIENT_URL);
    });
});

export default router;
