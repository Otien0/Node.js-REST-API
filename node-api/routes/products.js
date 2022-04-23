const express               = require("express"),
      router                = express.Router(),
      Product               = require("../models/productModel"),
      products              = require('../controllers/productsController');


router.post('/', products.createProduct);
    


module.exports = router;