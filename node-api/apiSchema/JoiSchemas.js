const Joi = require("joi");

module.exports.ProductSchema = Joi.object().keys({
  name: Joi.string().required(),
  price: Joi.number().required().min(0),
  brand: Joi.string().required(),
});
// module.exports.ProductSchema = Joi.object({
//     product: Joi.object({
//         name: Joi.string().required(),
//         price: Joi.number().required().min(0),
//         brand: Joi.string().required()
//     }).required()
// })
module.exports.getProductsPage = Joi.object().keys({
  skip: Joi.string(),
  limit: Joi.string(),
});

module.exports.updateProductSchema = Joi.object().keys({
  name: Joi.string(),
  price: Joi.number(),
  brand: Joi.string(),
});

module.exports.signup = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports.loginSchema = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
