import { where } from "sequelize";

const { User, Address } = require("../sequelize/models/");

class AddressServices {
  static async postAddress(data) {
    const user = await User.findOne({ where: { email: data.email } });
    if (!user) {
      return false;
    } else {
      const exists = await Address.findOne({ where: { userId: user.id } });
      if (exists) {
        return "exists";
      } else {
        await Address.create({
          userId: user.id,
          province: data.province,
          district: data.district,
          street: data.street,
          cell: data.cell,
        });
        return true;
      }
    }
  }

  static async updateAddress(data) {
    console.log(data);
    const user = await User.findOne({ where: { email: data.email } });
    if (!user) {
      return false;
    } else {
      const exists = await Address.findOne({ where: { userId: user.id } });
      if (!exists) {
        return "notExist";
      } else {
        if (data.province) {
          await Address.update(
            { province: data.province },
            {
              where: {
                userId: user.id,
              },
            }
          );
        }
        if (data.district) {
          await Address.update(
            { district: data.district },
            {
              where: {
                userId: user.id,
              },
            }
          );
        }
        if (data.street) {
          await Address.update(
            { street: data.street },
            {
              where: {
                userId: user.id,
              },
            }
          );
        }
        if (data.cell) {
          await Address.update(
            { cell: data.cell },
            {
              where: {
                userId: user.id,
              },
            }
          );
        }
        return true;
      }
    }
  }
}

export default AddressServices;
