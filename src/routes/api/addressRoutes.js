import express from "express";
import {
  updateValidation,
  addressValidation,
} from "../../middleware/validations";
import AddressController from "../../controller/addressController";
const route = express.Router();

route.post("", addressValidation, AddressController.postAddress);
route.patch("", updateValidation, AddressController.updateAddress);
export default route;
