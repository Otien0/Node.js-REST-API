const Product           = require('../models/productModel'),
      {formatMongoData} = require('../helper/dbHelper');

module.exports.createProduct = async(serviceData) => {
    try {
        let product = new Product({... serviceData})

        let result =  await product.save()
        return formatMongoData(result);
    } catch (error) {
        console.log('Something went wrong: Service: createProduct', error)
        throw new Error(error)
    }
   
}

module.exports.getProducts = async(serviceData) => {
    try {
        let products = await Product.find({})
        return formatMongoData(products)
    } catch (error) {
        console.log('Something went wrong: Service: getProducts', error)
        throw new Error(error)
    }
   
}