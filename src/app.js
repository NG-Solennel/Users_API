import express from "express";
// import { sequelize } from "./sequelize/models";
const { sequelize } = require("./sequelize/models");
const app = express();

const port = process.env.PORT || 5000;

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
  console.log("Connecting server on port " + port);
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
})();
