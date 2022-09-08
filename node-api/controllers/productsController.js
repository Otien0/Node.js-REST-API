const productService = require("../service/productsService"),
  constants = require("../constants");

//CREATE ROUTE-- Add new Product to DB
module.exports.createProduct = async (req, res) => {
  let response = { ...constants.defaultServerResponse };

  try {
    const serviceResponse = await productService.createProduct(req.body);
    response.statusCode = 200;
    response.message = constants.productMessage.PRODUCT_CREATED;
    response.body = serviceResponse;
  } catch (error) {
    console.log("Something went wrong: Controller: createProduct", error);
    response.message = error.message;
  }
  return res.status(response.statusCode).send(response);
};

//GET ROUTE-- GET all Products from the Database
module.exports.getProducts = async (req, res) => {
  let response = { ...constants.defaultServerResponse };

  try {
    const serviceResponse = await productService.getProducts(req.query);
    response.statusCode = 200;
    response.message = constants.productMessage.PRODUCT_FETCHED;
    response.body = serviceResponse;
  } catch (error) {
    console.log("Something went wrong: Controller: getProducts", error);
    response.message = error.message;
  }
  return res.status(response.statusCode).send(response);
};

//GET ROUTE-- GET a single Product By Id from the Database
module.exports.getProductById = async (req, res) => {
  let response = { ...constants.defaultServerResponse };

  try {
    const serviceResponse = await productService.getProductById(req.params);
    response.statusCode = 200;
    response.message = constants.productMessage.PRODUCT_FETCHED;
    response.body = serviceResponse;
  } catch (error) {
    console.log("Something went wrong: Controller: getProductById", error);
    response.message = error.message;
  }
  return res.status(response.statusCode).send(response);
};

module.exports.updateProduct = async (req, res) => {
  let response = { ...constants.defaultServerResponse };

  try {
    const serviceResponse = await productService.updateProduct({
      id: req.params.id,
      updateInfo: req.body,
    });
    response.statusCode = 200;
    response.message = constants.productMessage.PRODUCT_UPDATED;
    response.body = serviceResponse;
  } catch (error) {
    console.log("Something went wrong: Controller: getProductById", error);
    response.message = error.message;
  }
  return res.status(response.statusCode).send(response);
};

module.exports.deleteProduct = async (req, res) => {
  let response = { ...constants.defaultServerResponse };

  try {
    const serviceResponse = await productService.deleteProduct(req.params);
    response.statusCode = 200;
    response.message = constants.productMessage.PRODUCT_DELETED;
    response.body = serviceResponse;
  } catch (error) {
    console.log("Something went wrong: Controller: deleteProduct", error);
    response.message = error.message;
  }
  return res.status(response.statusCode).send(response);
};
