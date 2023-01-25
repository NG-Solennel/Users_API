import express from "express";
import userRoutes from "./api/userRoutes";
import addressRoutes from "./api/addressRoutes";
const route = express.Router();

route.use("/user", userRoutes);
route.use("", addressRoutes);
export default route;
