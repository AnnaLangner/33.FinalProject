const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller');

//get all products
router.route('/products').get(ProductController.getProducts);

// get product by range
router.route('/products/range/:startAt/:limit').get(ProductController.getProductByRange);

module.exports = router;