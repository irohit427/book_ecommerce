const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');

const updateProduct = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: 'Image could not be uploaded'
      });
    }
    let product = req.product
    product = _.extend(product, fields)
    if (files.photo.size > 1000000) {
      return res.status(400).json({
        error: 'Image should be less than 1mb in size'
      });
    }
    product.photo.data = fs.readFileSync(files.photo.path)
    product.photo.contentType = files.photo.type
    product.save((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        })
      }
      res.json(data)
    });
  })
}

module.exports = updateProduct;