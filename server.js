// Dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const db = mongoose.connection;

// Require Method Override
const methodOverride = require('method-override');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));

// Mongoose Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/PaleoPie';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
// Open the connection to mongo
db.once('open', () => {
    console.log("Hello from Mongo...");
});

// Controllers
const piesController = require(`./controllers/pies.js`);
app.use('/PaleoPie', piesController);

// Listening
app.listen(PORT, () => {
    console.log(`I'm listening on ${PORT}...`);
});