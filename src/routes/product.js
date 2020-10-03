const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/isAuth');
const isAdmin = require('../middleware/isAdmin');
const { signInRequired } = require('../helpers/signInRequired');
const userById = require('../controllers/userById');
const productById = require('../controllers/product/productById');
const createProduct = require('../controllers/product/createProduct');
const deleteProduct = require('../controllers/product/deleteProduct');
const readProduct = require('../controllers/product/readProduct');
const updateProduct = require('../controllers/product/updateProduct');

router.post('/product/create/:userId', signInRequired, isAuth, isAdmin, createProduct);
router.get('/product/:productId', readProduct);
router.delete('/product/:productId/:userId', signInRequired, isAuth, isAdmin, deleteProduct);
router.put('/product/:productId/:userId', signInRequired, isAuth, isAdmin, updateProduct);

router.param('userId', userById);
router.param('productId', productById);

module.exports = router;