import UserServices from "../services/userService";

class UserController {
  static async signup(req, res) {
    try {
      const { email, password, name } = req.body;
      const credentials = {
        email,
        name,
        password,
      };
      const response = await UserServices.signup(credentials);
      if (response === true) {
        return res.status(200).json({ message: "Sign Up Successfull" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ Error: error });
    }
  }
}

export default UserController;
