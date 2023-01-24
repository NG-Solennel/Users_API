import Joi from "joi";

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const addressSchema = Joi.object({
  province: Joi.string().min(3).required(),
  district: Joi.string().min(3).required(),
  street: Joi.string().min(3).required(),
  cell: Joi.string().min(3).required(),
});

const updateSchema = Joi.object({
  province: Joi.string().min(3),
  district: Joi.string().min(3),
  street: Joi.string().min(3),
  cell: Joi.string().min(3),
}).min(1);
const validateAddress = validator(addressSchema);
const validateUpdate = validator(updateSchema);
export { validateAddress, validateUpdate };
