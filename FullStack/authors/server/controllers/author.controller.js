const Author = require('../models/author.model');




module.exports.findAllauthors = (req, res) => {
     Author.find()
          .then((allauthors) => {
               res.json({ authors: allauthors })
          })
          .catch((err) => {
               res.json(err)
          });
}

module.exports.findOneauthor = (req, res) => {
     Author.findOne({ _id: req.params.id })
          .then(findOneauthor => {
               res.json({ author: findOneauthor })
          })
          .catch((err) => {
               res.json(err)
          });
}

module.exports.createNewauthor = (req, res) => {
     Author.create(req.body)
          .then(newlyCreatedauthor => {
               res.json({ author: newlyCreatedauthor })
          })
          .catch((err) => {
               res.json(err)
          });
}

module.exports.updateExistingauthor = (req, res) => {
     Author.findOneAndUpdate(
          { _id: req.params.id },
          req.body,
          { new: true, runValidators: true }
     )
          .then(updatedauthor => {
               res.json({ author: updatedauthor })
          })
          .catch((err) => {
               res.json(err)
          });
}

module.exports.deleteAnExistingauthor = (req, res) => {
     Author.deleteOne({ _id: req.params.id })
          .then(result => {
               res.json({ result: result })
          })
          .catch((err) => {
               res.json(err)
          });
}
