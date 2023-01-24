import bcrypt from "bcrypt";
const { User } = require("../sequelize/models/");
class UserServices {
  static async signup(data) {
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
export default UserServices;
