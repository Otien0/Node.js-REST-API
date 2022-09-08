const Product = require("../models/productModel"),
  { formatMongoData, checkObjectId } = require("../helper/dbHelper"),
  constants = require("../constants");

module.exports.createProduct = async (serviceData) => {
  try {
    let product = new Product({ ...serviceData });

    let result = await product.save();
    return formatMongoData(result);
  } catch (error) {
    console.log("Something went wrong: Service: createProduct", error);
    throw new Error(error);
  }
};

module.exports.getProducts = async ({ skip = 0, limit = 10 }) => {
  try {
    let products = await Product.find({})
      .skip(parseInt(skip))
      .limit(parseInt(limit));
    return formatMongoData(products);
  } catch (error) {
    console.log("Something went wrong: Service: getProducts", error);
    throw new Error(error);
  }
};

module.exports.getProductById = async ({ id }) => {
  try {
    checkObjectId(id);
    let product = await Product.findById(id);
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(product);
  } catch (error) {
    console.log("Something went wrong: Service: getProductById", error);
    throw new Error(error);
  }
};

module.exports.updateProduct = async ({ id, updateInfo }) => {
  try {
    checkObjectId(id);
    let product = await Product.findOneAndUpdate({ _id: id }, updateInfo, {
      new: true,
    });
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(product);
  } catch (error) {
    console.log("Something went wrong: Service: getProductById", error);
    throw new Error(error);
  }
};

module.exports.deleteProduct = async ({ id }) => {
  try {
    checkObjectId(id);
    let product = await Product.findByIdAndDelete(id);
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(product);
  } catch (error) {
    console.log("Something went wrong: Service: getProductById", error);
    throw new Error(error);
  }
};
