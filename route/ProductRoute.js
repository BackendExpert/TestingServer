const express = require('express');
const { route } = require('./UserRoute');
const ProdcutController = require('../controller/ProductController');

const router = express.Router();

router.post('/createProduct', ProdcutController.CreateNewProduct)

module.exports = router;