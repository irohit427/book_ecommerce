const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32
    },
    description: {
      type: String,
      trim: true,
      maxlength: 2000
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      type: ObjectId,
      ref: 'Category',
      required: true
    },
    quantity: {
      type: Number,
    },
    photo: {
      data: Buffer,
      contentType: String
    },
    shipping: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true}
)

module.exports = mongoose.model('Product', productSchema);