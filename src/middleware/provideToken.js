import jwt from "jsonwebtoken";
const { User } = require("../sequelize/models/");
const provideTokenEmail = async (req, res, next) => {
  try {
    const bearerToken = req.header("Authorization");
    if (!bearerToken) {
      res.status(401).json({ Message: "Please sign in" });
    } else {
      const token = bearerToken.split(" ")[1];
      const verified = jwt.verify(token, process.env.SECRET_KEY);
      const userEmail = verified.email;
      const exists = await User.findOne({ where: { email: userEmail } });
      if (!exists) {
        res.status(401).json({ message: "Please sign in" });
      } else {
        res.locals.email = userEmail;
        next();
      }
    }
  } catch (error) {
    res.status(500).json({ error: error });
    console.log(error);
  }
};

export default provideTokenEmail;
