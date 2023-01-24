import express from "express";
import {
  updateValidation,
  addressValidation,
} from "../../middleware/validations";
import AddressController from "../../controller/addressController";
import provideTokenEmail from "../../middleware/provideToken";
const route = express.Router();

route.post(
  "",
  addressValidation,
  provideTokenEmail,
  AddressController.postAddress
);
route.patch(
  "",
  updateValidation,
  provideTokenEmail,
  AddressController.updateAddress
);
export default route;
