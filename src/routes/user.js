const express = require('express');
const router = express.Router();

const userById = require('../controllers/userById');
const { signInRequired } = require('../helpers/signInRequired');
const isAuth = require('../middleware/isAuth');
const updateUser = require('../controllers/updateUser');

router.get('/user/:userId/profile', isAuth, signInRequired, (req, res) => {
  res.status(200).json({
    user: req.profile
  })
})

router.get('/user/:userId', isAuth, signInRequired, updateUser)

router.param('userId', userById);

module.exports = router;