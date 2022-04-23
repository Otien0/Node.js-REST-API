const { ProductSchema} = require('../apiSchema/JoiSchemas'),
      ExpressError     = require('../utils/ExpressError'),
      constants        = require('../constants/index');
      
      

const validateObjectSchema = (data) => {
    const result = ProductSchema.validate(data, {convert: false});
    if (result.error){
        const errorDetails = result.error.details.map(value => {
            return {
                error: value.message,
                path: value.path
            }
        })
        return errorDetails;
    }
    return null;
}

module.exports.validateProduct = (schema) => {
    return(req, res, next) => {
        let response = {...constants.defaultServerResponse}
        const error = validateObjectSchema(req.body, schema)
        if(error){
            response.body = error
            response.message = constants.requestValidationMessage.BAD_REQUEST
            return res.status(response.statusCode).send(response);
        }
        return next();
    }
    
}