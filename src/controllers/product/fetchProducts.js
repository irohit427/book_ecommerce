const Product = require('../../models/product');
const fetchProducts = (req, res) => {
  let order = req.query.order ? req.query.order : 'asc';
  let limit = req.query.limit ? req.query.limit : 10;

  Product.find().select("-photo").populate('category').sort([[order]])
    .limit(limit).exec((err, products) => {
      if (err) {
        return res.json({
          error: "Product not found"
        })
      }
      res.send(products);
    })
}

module.exports = fetchProducts;