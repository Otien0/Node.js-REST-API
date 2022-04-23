const Joi = require('joi'),
    //   middlewareObj = {},
    { productSchema} = require('../apiSchema/JoiSchemas');
      


const validateObjectSchema = (data, schema) => {
    const result = Joi.validate(data, schema);
    console.log('Joi Schema Validation Result ===', result);
}

module.exports.validateProduct = (schema) => {
    // const { error } = productSchema.validate(req.body);
    // if (error) {
    //     const msg = error.details.map(el => el.message).join(',')
    //     throw new Error(error, msg)
    // } else {
    //     return(req, res, next) => {
    //         validateObjectSchema(req.body, schema)
    //     }
    // }
    return(req, res, next) => {
        validateObjectSchema(req.body, schema)
    }
    
}