const Productcontroller = require('../controllers/product.controller');

module.exports = app => {
     app.get('/api/product', Productcontroller.findAllProducts);
     app.get('/api/product/:id', Productcontroller.findOneProduct);
     app.patch('/api/product/:id', Productcontroller.updateExistingProduct);
     app.post('/api/product', Productcontroller.createNewProduct);
     app.delete('/api/product/:id', Productcontroller.deleteAnExistingProduct);
     
}
