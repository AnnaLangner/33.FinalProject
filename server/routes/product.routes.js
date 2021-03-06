const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller');

//get all products
router.route('/products').get(ProductController.getProducts);
router.route('/products/:id').get(ProductController.getSingleProduct);

// get product by range
router.route('/products/range/:startAt/:limit').get(ProductController.getProductByRange);

//get cart
router.route('/cart').get(ProductController.getCartProducts);

module.exports = router;