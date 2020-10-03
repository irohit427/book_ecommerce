const express = require('express');
const router = express.Router();
const createCategory = require('../controllers/category/createCategory');

router.post('/create/category', createCategory);

module.exports = router;