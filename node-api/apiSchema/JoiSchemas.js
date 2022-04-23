const Joi = require('joi');


module.exports.ProductSchema = Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required().min(0),
    brand: Joi.string().required()
})
// module.exports.ProductSchema = Joi.object({
//     product: Joi.object({
//         name: Joi.string().required(),
//         price: Joi.number().required().min(0),
//         brand: Joi.string().required()
//     }).required()
// })


// module.exports.reviewSchema = Joi.object({
//     review: Joi.object({
//         rating: Joi.number().required().min(1).max(5),
//         body: Joi.string().required()
//     }).required()
// })