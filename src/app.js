import express from "express";
import morgan from "morgan";
import "dotenv/config";
import routes from "./routes";
// import { sequelize } from "./sequelize/models";
const { sequelize } = require("./sequelize/models");
const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(morgan("dev"));

const connectDB = async () => {
  console.log("Checking db connection");
  try {
    await sequelize.authenticate();
    console.log("DB connection successfull");
  } catch (error) {
    console.log("Failed db connection");
    process.exit(1);
  }
};
(async () => {
  await connectDB();
  app.use("", routes);
  app.use("*", (req, res) => {
    res.status(404).json({ message: "Not Found" });
  });
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
})();
