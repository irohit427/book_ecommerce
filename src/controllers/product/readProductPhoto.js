const readProductPhoto = (req, res,next) => {
  if (req.product) {
    res.set('Content-Type', req.product.photo.contentType)
    return res.send(req.product.photo.data);
  }
}

module.exports = readProductPhoto;