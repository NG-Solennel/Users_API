const { User } = require("../sequelize/models/");
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";
const isLogged = async (req, res, next) => {
  try {
    if (req.user) {
      let userEmail = req.user.email;
      const exists = await User.findOne({ where: { email: userEmail } });
      if (exists) {
        const token = jwt.sign(
          { id: exists.id, name: exists.name, email: exists.email },
          process.env.SECRET_KEY
        );
        return res.json({ name: req.user.displayName, token: token });
      } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.user.id, salt);
        await User.create({
          name: req.user.displayName,
          email: userEmail,
          password: hashedPassword,
        });
        return res.redirect("/user/googlelogin");
      }
    } else {
      return res.status(400).json({ error: "Couldn't extract the user" });
    }
  } catch (error) {
    res.status(424).json({ error });
    console.log(error);
  }
};

export default isLogged;
