import express from "express";
import userRoutes from "./api/userRoutes";

const route = express.Router();

route.use("/user", userRoutes);

export default route;
