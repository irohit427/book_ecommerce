const User = require('../models/user');
const updateUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.profile._id}, {$set: req.body}, {new: true},
     (err, user) => {
       if (err) {
         return res.status(400).json({
           error: 'You are not authorized to perform this action.'
         })
       }
       user.hashed_password = undefined
       user.salt = undefined;
       res.json(user);
     })
}

module.exports = updateUser;