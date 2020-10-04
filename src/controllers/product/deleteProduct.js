const { errorHandler } = require("../../helpers/dbErrorHandler");

const deleteProduct = (req, res) => {
  let product = req.product
  product.remove((err, deletedProduct) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json({
      deletedProduct,
      message: 'Product deleted successfully.'
    });
  })
}

module.exports = deleteProduct;