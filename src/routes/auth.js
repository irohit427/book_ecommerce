const express = require('express');
const router = express.Router();
const signUp = require('../controllers/signUp');
const signIn = require('../controllers/signIn');
const signOut = require('../controllers/signOut');

router.post('/sign-up', signUp)
router.post('/sign-in', signIn)
router.get('/sign-out', signOut);

module.exports = router;