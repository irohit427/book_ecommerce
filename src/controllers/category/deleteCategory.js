const deleteCategory = (req, res) => {
  let category = req.category;
  category.remove((err, deletedCategory) => {
    if (err) {
      return res.status(400).json({
        error: 'Unable to delete category'
      });
    }
    return res.json({
      deleteCategory,
      message: 'Category deleted successfully'
    });
  });
}

module.exports = deleteCategory;