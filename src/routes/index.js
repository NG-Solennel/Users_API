import express from "express";
import userRoutes from "./api/userRoutes";
import addressRoutes from "./api/addressRoutes";
import googleRoutes from "./api/googleRoutes";
const route = express.Router();
route.use("/user", googleRoutes);
route.use("/user", userRoutes);
route.use("", addressRoutes);
export default route;
