const express = require('express');
const router = express.Router();
const createCategory = require('../controllers/category/createCategory');
const isAdmin = require('../middleware/isAdmin');
const isAuth = require('../middleware/isAuth');
const { signInRequired } = require('../helpers/signInRequired');
const userById = require('../controllers/userById');
const categoryById = require('../controllers/category/categoryById');
const readCategory = require('../controllers/category/readCategory');

router.post('/create/category/:userId', signInRequired, isAuth, isAdmin, createCategory);
router.get('/category/:categoryId', readCategory);

router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;