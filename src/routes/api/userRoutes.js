import express from "express";
import UserController from "../../controller/userController";
const route = express.Router();

route.post("/signup", UserController.signup);
export default route;
