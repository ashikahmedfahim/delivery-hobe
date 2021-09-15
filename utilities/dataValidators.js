const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

module.exports.isValidAreaObject = (value) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  const isValid = schema.validate(value);
  return isValid;
};
