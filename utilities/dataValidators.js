const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

module.exports.isValidAreaObject = (value) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  const isValid = schema.validate(value);
  return isValid;
};

module.exports.isValidProductObject = (value) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    sellingPrice: Joi.number().required(),
    inventory: Joi.number().required(),
  });
  const isValid = schema.validate(value);
  return isValid;
};
