const Product        = require('../models/productModel'),
      productService = require('../service/productsService'),
      constants      = require('../constants');


//CREATE ROUTE-- Add new Product to DB
module.exports.createProduct = async(req, res) => {
    let response = {...constants.defaultServerResponse}

    try {
        // console.log('===', req.body)
        const serviceResponse = await productService.createProduct(req.body);
        response.statusCode = 200;
        response.message = constants.productMessage.PRODUCT_CREATED;
        response.body = serviceResponse;
    } catch (error) {
        console.log('Something went wrong: Controller: createProduct', error);
        response.message = error.message;
    }
    return res.status(response.statusCode).send(response);
}

//SHOW ROUTE-- shows more info about one Product
module.exports.showProduct = async (req, res,) => {

}

//EDIT ROUTE
module.exports.renderEditForm = async (req, res) => {

}

// UPDATE ROUTE
module.exports.updateProduct = async (req, res) => {
  
}

// DESTROY ROUTE
module.exports.deleteProduct = async (req, res) => {

}