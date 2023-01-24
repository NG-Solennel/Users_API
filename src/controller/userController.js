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
      if (response === "exists") {
        return res.status(409).json({ message: "User already exists" });
      } else if (response === true) {
        return res.status(200).json({ message: "Sign Up Successfull" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Error: error });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const data = {
        email,
        password,
      };
      const response = await UserServices.login(data);
      if (response.type == "Email incorrect") {
        return res.status(400).json({ message: "Email incorrect" });
      } else if (response.type == "Password incorrect") {
        return res.status(400).json({ message: "Password incorrect" });
      } else if (response.type == "response") {
        res.header("auth-token", response.data);
        return res.status(200).json({
          name: response.name,
          token: response.data,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error });
    }
  }

  static async getUsers(req, res) {
    try {
      const response = await UserServices.getUsers();
      if (response.length == 0) {
        return res.status(204).json({});
      } else {
        return res.status(200).json({ users: response });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Error: error });
    }
  }
}

export default UserController;
