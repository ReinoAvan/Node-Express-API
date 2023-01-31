const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const { getProducts, postProduct, getProductById, deleteProduct, updateProduct} = require('../controllers/product')

let products = []

router.get('/', getProducts) 

router.post('/', postProduct)

// /users/:id => req.params {id} 
router.get('/:id', getProductById);

router.delete('/:id', deleteProduct);

router.patch('/:id', updateProduct);

module.exports = router;