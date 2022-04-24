const express               = require("express"),
      router                = express.Router(),
    //   Product               = require("../models/productModel"),
      products              = require('../controllers/productsController'),
      { validateProduct, validatePaginationSchema, validateProductPut }   = require('../middleware/validations'),
      Schema               = require('../apiSchema/JoiSchemas');



router.post('/', validateProduct(Schema.ProductSchema), products.createProduct);

router.get('/:id',  products.getProductById);
router.put('/:id', validateProductPut(Schema.updateProductSchema), products.updateProduct);

router.get('/', validatePaginationSchema(Schema.getProductsPage), products.getProducts);

router.delete('/:id', products.deleteProduct);

module.exports = router;