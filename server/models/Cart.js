const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
 userId: {
    type: String,
    required: true,
  },
  products: [
    {
      productId: String,
      name: String,
      imageUrl: String,
      price: String,
    },
  ],
});

module.exports = mongoose.model('Cart', cartItemSchema);
