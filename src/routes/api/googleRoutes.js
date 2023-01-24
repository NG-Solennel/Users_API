import passport from "passport";
import express from "express";
import isLogged from "../../middleware/googleMid";
const route = express.Router();

route.get(
  "/googlelogin",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
route.get("/signup", (req, res) => {
  res.json({ message: "Please sign up" });
});
route.get("/login", isLogged);
route.get(
  "/googlelogin/redirect",
  passport.authenticate("google", {
    successRedirect: "/user/login",
    failureRedirect: "/user/signup",
  })
);
export default route;
