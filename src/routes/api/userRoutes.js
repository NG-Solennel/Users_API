import express from "express";
import UserController from "../../controller/userController";
import { signupValidation } from "../../middleware/validations";
import { authUserLogin, authorized } from "../../middleware/auth/passportAuth";
const route = express.Router();

route.post("/signup", signupValidation, UserController.signup);
route.post("/login", authUserLogin, UserController.login);
route.get("", UserController.getUsers);
export default route;
