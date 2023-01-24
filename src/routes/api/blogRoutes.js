import express from "express";
import { BlogController } from "../../controller/blogController";

const route = express.Router();

route.post("/", BlogController.createBlog);
export default route;
