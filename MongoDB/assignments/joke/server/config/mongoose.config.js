const mongoose = require('mongoose');
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;

//mongodb+srv://majedkhaldi96:<password>@cluster0.tsnojsl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const uri = `mongodb+srv://${username}:${pw}@cluster0.tsnojsl.mongodb.net/${dbName}?retryWrites=true&w=majority`;
// const uri = mongodb+srv://${username}:${pw}@cluster0.js0ybrx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/${dbName};
mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));