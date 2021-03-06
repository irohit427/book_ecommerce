const User = require('../models/user');
const { errorHandler } = require('../helpers/dbErrorHandler');
const { body, validationResult } = require('express-validator');

const signUp = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: errorHandler(err)
      })
    }
    res.status(200).json({ user });
  })
}

module.exports = signUp;