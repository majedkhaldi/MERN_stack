// const express = require('express');
// const router = express.Router();
const JokeController = require('../controllers/jokes.controller');
 
module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.get('/api/jokes/:id', JokeController.findOneSingleJoke);
    app.patch('/api/jokes/:id', JokeController.updateExistingJoke);
    app.delete('/api/jokes/:id', JokeController.deleteAnExistingJoke);
}


// module.exports = router;