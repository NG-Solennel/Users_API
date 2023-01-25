import express from "express";
import UserController from "../../controller/userController";
import { signupValidation } from "../../middleware/validations";
const route = express.Router();

route.post("/signup", signupValidation, UserController.signup);
route.get("", UserController.getUsers);
export default route;
