const express               = require("express"),
      router                = express.Router(),
    //   Product               = require("../models/productModel"),
      products              = require('../controllers/productsController'),
      { validateProduct }   = require('../middleware/validations'),
      product               = require('../apiSchema/JoiSchemas');



router.post('/', validateProduct(product.ProductSchema), products.createProduct);


module.exports = router;