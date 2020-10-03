const { errorHandler } = require("../../helpers/dbErrorHandler");

const updateCategory = (req, res) => {
  let category = req.category;
  category.name = req.body.name;
  category.save((err, updatedCategory) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json(updatedCategory);
  })
}

module.exports = updateCategory;