const isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.auth._id == req.profile._id
  if (!user) {
    return res.status(403).json({
      error: "Access denied"
    });
  }
  next();
}

module.exports = isAuth;