const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
     title: {
          type: String
     },
     price: {
          type: Number
     },
     description: {
          type: String
     }
}, {
     timestamps: true // This option adds `createdAt` and `updatedAt` fields
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;