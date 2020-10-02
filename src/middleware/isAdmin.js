const isAdmin = (req, res, next) => {
  if (req.profile.role == 0) {
    return res.status(403).json({
      error: 'Admin Resource!! Access Denied'
    });
  }
  next();
}

module.exports = isAdmin;