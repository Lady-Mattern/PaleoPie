// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const piesController = require('./controllers/pies.js');

// Variables
const app = express();
const db = mongoose.connection;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/PaleoPie';

// Require Method Override
const methodOverride = require('method-override');

// Middleware
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use('/PaleoPie', piesController);

// Mongo Connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
// Open the connection to mongo
db.once('open', () => {
    console.log("Hello from Mongo...");
});

// Listening

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(PORT, () => {
    console.log(`I'm listening on ${PORT}...`);
});