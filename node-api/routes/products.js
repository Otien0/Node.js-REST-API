const express               = require("express"),
      router                = express.Router(),
    //   Product               = require("../models/productModel"),
      products              = require('../controllers/productsController'),
      { validateProduct, validatePaginationSchema, validateProductPut, validateToken }   = require('../middleware/validations'),
      Schema               = require('../apiSchema/JoiSchemas');



router.post('/', validateToken, validateProduct(Schema.ProductSchema), products.createProduct);

router.get('/:id', validateToken, products.getProductById);
router.put('/:id', validateToken, validateProductPut(Schema.updateProductSchema), products.updateProduct);

router.get('/', validateToken, validatePaginationSchema(Schema.getProductsPage), products.getProducts);

router.delete('/:id', validateToken, products.deleteProduct);

module.exports = router;