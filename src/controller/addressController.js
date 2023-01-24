import AddressServices from "../services/addressService";

class AddressController {
  static async postAddress(req, res) {
    try {
      if (!res.locals.email) {
        return res.status(400).json({ error: "Couldn't identify the user" });
      } else {
        const { province, district, street, cell } = req.body;
        const data = {
          email: res.locals.email,
          province,
          district,
          street,
          cell,
        };
        const response = await AddressServices.postAddress(data);
        if (response == "exists") {
          return res.status(409).json({ message: "User already exists" });
        } else if (response == false) {
          return res.status(400).json({ error: "Couldn't find the user" });
        } else if (response == true) {
          return res.status(200).json({ message: "Posted successfully" });
        }
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error });
    }
  }

  static async updateAddress(req, res) {
    try {
      let data = {};
      if (!res.locals.email) {
        return res.status(400).json({ error: "Couldn't identify the user" });
      } else {
        if (req.body.province) {
          data.email = res.locals.email;
          data.province = req.body.province;
        }
        if (req.body.district) {
          data.email = res.locals.email;
          data.district = req.body.district;
        }
        if (req.body.street) {
          data.email = res.locals.email;
          data.street = req.body.street;
        }
        if (req.body.cell) {
          data.email = res.locals.email;
          data.cell = req.body.cell;
        }
        const response = await AddressServices.updateAddress(data);
        if (response == false) {
          return res.status(400).json({ error: "User doesn't exist" });
        } else if (response == "notExist") {
          return res.status(404).json({ error: "User not found" });
        } else {
          return res.status(200).json({ message: "Updated successfully" });
        }
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error });
    }
  }
}

export default AddressController;
