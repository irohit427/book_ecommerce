const jwt = require('jsonwebtoken');
const User = require('../models/user');

const signIn = (req, res) => {
  const { email, password } = req.body;
  User.findOne({email}, (err, user) => {
    if ( err || !user) {
      return res.status(400).json({
        err: 'User does not exist. Please Sign Up'
      });
    }
    
    if (!user.authenticate(password)) {
      return res.status(401).json({
        err: 'Password Incorrect'
      });
    }

    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
    res.cookie('t', token, {expire: new Date() + 9999});
    const { _id, name, email, role} = user;
    return res.json({
      token, user: {_id, name, email, role}
    })
  })
}

module.exports = signIn;