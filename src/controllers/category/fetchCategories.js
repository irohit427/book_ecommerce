const Category = require('../../models/category');
const fetchCategories = (req, res) => {
  Category.find().exec((err, categories) => {
    if (err || !categories) {
      return res.status(400).json({
        error: 'Category not found'
      });
    }
    res.send(categories);
  });
}

module.exports = fetchCategories;