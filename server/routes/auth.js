import express from "express";
import passport from "passport";

const router = express.Router();

const url = "http://127.0.0.1:5173/";

router.get("/login/failed", (req, res) => {
    res.status(404).json({
        success: false,
        message: "Login failed"
    })
})

router.get("/login/sucess", (req, res) => {
    if(req.user){
        res.status(200).json({
            success: true,
            message: "Login success",
            user: req.user, 
        })
    }
})

router.get("/logout", (req, res) => {
    res.logout();
    res.redirect(url);
})

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { 
    successRedirect: url,
    failureRedirect: "/login/failed"
})
);

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: url,
    failureRedirect: "/login/failed",
  })
);

router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: url,
    failureRedirect: "/login/failed",
  })
);

export default router;
