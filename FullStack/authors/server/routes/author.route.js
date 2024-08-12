const authorcontroller = require('../controllers/author.controller');

module.exports = app => {
     app.get('/api/author', authorcontroller.findAllauthors);
     app.get('/api/author/:id', authorcontroller.findOneauthor);
     app.patch('/api/author/:id', authorcontroller.updateExistingauthor);
     app.post('/api/author', authorcontroller.createNewauthor);
     app.delete('/api/author/:id', authorcontroller.deleteAnExistingauthor);
     
}
