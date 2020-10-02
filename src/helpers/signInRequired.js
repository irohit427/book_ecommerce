var jwt = require('express-jwt');

exports.signInRequired = jwt({
  secret: 'nhgfyufrq3wtr78233t4r7t87rt2qkwhdu23y37',
  algorithms: ["HS256"],
  userProperty: 'auth'
})

