import { validateLogin, validateUser } from "../validations/userValidations";
import {
  validateAddress,
  validateUpdate,
} from "../validations/addressValidations";
const signupValidation = (req, res, next) => {
  const { error } = validateUser(req.body);
  if (error) {
    res
      .status(400)
      .send(
        error.details.map((detail) =>
          detail.message.replace(/[^a-zA-Z0-9 ]/g, "")
        )
      );
  } else {
    next();
  }
};

const addressValidation = (req, res, next) => {
  const { error } = validateAddress(req.body);
  if (error) {
    res
      .status(400)
      .send(
        error.details.map((detail) =>
          detail.message.replace(/[^a-zA-Z0-9 ]/g, "")
        )
      );
  } else {
    next();
  }
};
const updateValidation = (req, res, next) => {
  const { error } = validateUpdate(req.body);
  if (error) {
    res
      .status(400)
      .send(
        error.details.map((detail) =>
          detail.message.replace(/[^a-zA-Z0-9 ]/g, "")
        )
      );
  } else {
    next();
  }
};

export { signupValidation, addressValidation, updateValidation };
