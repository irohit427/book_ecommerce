const express = require('express');
const router = express.Router();

const userById = require('../controllers/userById');
const { signInRequired } = require('../helpers/signInRequired');
const isAuth = require('../middleware/isAuth');

router.get('/user/:userId/profile', isAuth, signInRequired, (req, res) => {
  res.status(200).json({
    user: req.profile
  })
})

router.param('userId', userById);

module.exports = router;