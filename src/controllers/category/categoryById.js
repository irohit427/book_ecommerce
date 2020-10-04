const { errorHandler } = require('../../helpers/dbErrorHandler');
const Category = require('../../models/category');
const categoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    req.category = category;
    next();
  })
}

module.exports = categoryById;