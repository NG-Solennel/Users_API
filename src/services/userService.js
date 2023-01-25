import bcrypt from "bcrypt";
const { User } = require("../sequelize/models/");
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
  static async getUsers() {
    const users = await User.findAll();
    return users;
  }
}

export default UserServices;
