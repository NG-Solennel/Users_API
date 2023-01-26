class GoogleController {
  static async signup(req, res) {
    res.json({ email: req.user.email });
  }
}

export default GoogleController;
