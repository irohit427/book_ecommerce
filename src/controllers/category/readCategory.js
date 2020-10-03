const readCategory = (req, res) => {
  return res.json(req.category);
}

module.exports = readCategory;