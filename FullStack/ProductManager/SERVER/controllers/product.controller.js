const Product = require('../models/Product.model');




module.exports.findAllProducts = (req, res) => {
     Product.find()
          .then((allProducts) => {
               res.json({ product: allProducts })
          })
          .catch((err) => {
               res.json(err)
          });
}

module.exports.findOneProduct = (req, res) => {
     Product.findOne({ _id: req.params.id })
          .then(findOneProduct => {
               res.json({ product: findOneProduct })
          })
          .catch((err) => {
               res.json(err)
          });
}

module.exports.createNewProduct = (req, res) => {
     Product.create(req.body)
          .then(newlyCreatedproduct => {
               res.json({ product: newlyCreatedproduct })
          })
          .catch((err) => {
               res.json(err)
          });
}

module.exports.updateExistingProduct = (req, res) => {
     Product.findOneAndUpdate(
          { _id: req.params.id },
          req.body,
          { new: true, runValidators: true }
     )
          .then(updatedProduct => {
               res.json({ product: updatedProduct })
          })
          .catch((err) => {
               res.json(err)
          });
}

module.exports.deleteAnExistingProduct = (req, res) => {
     Product.deleteOne({ _id: req.params.id })
          .then(result => {
               res.json({ result: result })
          })
          .catch((err) => {
               res.json(err)
          });
}
