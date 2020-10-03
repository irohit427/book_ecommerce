const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/isAuth');
const isAdmin = require('../middleware/isAdmin');
const { signInRequired } = require('../helpers/signInRequired');
const userById = require('../controllers/userById');
const createProduct = require('../controllers/product/createProduct');

router.post('/product/create/:userId', signInRequired, isAuth, isAdmin, createProduct);
router.param('userId', userById);
module.exports = router;