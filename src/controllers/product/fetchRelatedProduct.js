const Product = require('../../models/product');
const fetchRelatedProducts = () => {
  let limit = req.query.limit ? parseInt(req.query.limit): 10;
  Product.find({_id: {$ne: req.product}, category: req.product.category})
    .select("-photo").limit(limit).populate('category', '_id name')
    .exec((err, products) => {
      if (err || !products) {
        return res.status(400).json({
          error: "Products not found",
        })
      }
      res.send(products);
    })
}

module.exports = fetchRelatedProducts;