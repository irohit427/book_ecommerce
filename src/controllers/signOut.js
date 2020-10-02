const signOut = (req, res) => {
  res.clearCookie('t');
  res.json({
    message: 'Sign out successful'
  });
}

module.exports = signOut;