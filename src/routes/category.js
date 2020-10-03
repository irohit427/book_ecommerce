const express = require('express');
const router = express.Router();
const createCategory = require('../controllers/category/createCategory');
const isAdmin = require('../middleware/isAdmin');
const isAuth = require('../middleware/isAuth');
const { signInRequired } = require('../helpers/signInRequired');
const userById = require('../controllers/userById');

router.post('/create/category/:userId', signInRequired, isAuth, isAdmin, createCategory);

router.param('userId', userById);

module.exports = router;