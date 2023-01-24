import bcrypt from "bcrypt";
const { User } = require("../sequelize/models/");
import jwt from "jsonwebtoken";
class UserServices {
  static async signup(data) {
    const exists = await User.findOne({ where: { email: data.email } });
    if (exists) {
      return "exists";
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(data.password, salt);
      await User.create({
        name: data.name,
        email: data.email,
        password: hashedPassword,
      });
      return true;
    }
  }
  static async login(data) {
    const user = await User.findOne({ where: { email: data.email } });
    if (!user) {
      return { type: "Email incorrect" };
    } else {
      const validPass = await bcrypt.compare(data.password, user.password);
      if (!validPass) {
        return { type: "Password incorrect" };
      } else {
        const token = jwt.sign(
          { id: user.id, email: user.email, name: user.name },
          process.env.SECRET_KEY
        );
        return {
          type: "response",
          data: token,
          name: user.name,
        };
      }
    }
  }

  static async getUsers() {
    const users = await User.findAll();
    return users;
  }
}

export default UserServices;
