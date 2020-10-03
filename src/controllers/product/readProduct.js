const readProduct = (req, res) => {
  req.product.photo = undefined;
  return res.json(req.product);
}

module.exports = readProduct;