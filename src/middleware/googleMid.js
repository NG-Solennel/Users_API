const { User } = require("../sequelize/models/");
import jwt from "jsonwebtoken";
import "dotenv/config";
const isLogged = async (req, res, next) => {
  try {
    if (req.user) {
      let userEmail = req.user.email;
      const exists = await User.findOne({ where: { email: userEmail } });
      console.log(exists);
      if (exists) {
        const token = jwt.sign(
          { id: exists.id, name: exists.name, email: exists.email },
          process.env.SECRET_KEY
        );
        res.json({ name: req.user.displayName, token: token });
        next();
      } else {
        console.log("Dont exist");
        res.status(401).redirect("/user/signup");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export default isLogged;
