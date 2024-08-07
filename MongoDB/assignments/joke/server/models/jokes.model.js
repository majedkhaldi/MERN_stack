const mongoose = require('mongoose');
 
// const JokeSchema  = new mongoose.Schema({
//     setup: {
//         type: String
//     },
//     punchline: {
//         type: String
//     }
// });
 

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, 'Joke content is required'],
        minlength: [5, 'Joke must be at least 5 characters long'],
    },
    punchline:{
        type: String,
        required: [true, 'Joke content is required'],
        minlength: [5, 'Joke must be at least 5 characters long'],
    }
}, { timestamps: true });


const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;
