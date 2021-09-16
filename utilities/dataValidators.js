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

module.exports.isValidObjectId = (value) => {
  const schema = Joi.object({
    id: Joi.objectId().required(),
  });
  const isValid = schema.validate({ id: value });
  return isValid;
};

module.exports.isValidProductUpdateData = (value) => {
  const schema = Joi.object({
    inventory: Joi.number().required(),
  });
  const isValid = schema.validate(value);
  return isValid;
};

module.exports.isValidWarehouseObject = (value) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    contact: Joi.string().required(),
    areaId: Joi.objectId().required(),
    avaiableProducts: Joi.array()
      .items({
        productId: Joi.objectId(),
        sourcingPrice: Joi.number(),
      })
      .has(
        Joi.object({
          productId: Joi.objectId().required(),
          sourcingPrice: Joi.number().required(),
        }).required()
      )
      .required(),
  });
  const isValid = schema.validate(value);
  return isValid;
};

module.exports.isValidUserObject = (value) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });
  const isValid = schema.validate(value);
  return isValid;
};

module.exports.isValidCheckoutObject = (value) => {
  const schema = Joi.object({
    items: Joi.array()
      .items({
        productId: Joi.objectId(),
        quantity: Joi.number(),
      })
      .has(
        Joi.object({
          productId: Joi.objectId().required(),
          quantity: Joi.number().required(),
        }).required()
      )
      .required(),
  });
  const isValid = schema.validate(value);
  return isValid;
}
