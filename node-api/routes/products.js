const express               = require("express"),
      router                = express.Router(),
    //   Product               = require("../models/productModel"),
      products              = require('../controllers/productsController'),
      { validateProduct, validatePaginationSchema }   = require('../middleware/validations'),
      Schema               = require('../apiSchema/JoiSchemas');



router.post('/', validateProduct(Schema.ProductSchema), products.createProduct);

router.get('/', validatePaginationSchema(Schema.getProductsPage), products.getProducts);

module.exports = router;