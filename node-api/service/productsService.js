const Product        = require('../models/productModel')

module.exports.createProduct = async(serviceData) => {
    try {
        let product = new Product({... serviceData})

        let result =  await product.save()
        return result.toObject();
    } catch (error) {
        console.log('Something went wrong: Service: createProduct', error)
        throw new Error(error)
    }
   
}