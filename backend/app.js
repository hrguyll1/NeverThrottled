var express = require('express');
var config = require('dotenv').config();
var cors = require('cors');

const apiRoutes = require('./routes');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
const app = express();
app.use(cors({origin: 'http://localhost:4200'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_LINK, {useNewUrlParser : true})
.catch(function(error) {
    console.log("Error");
});

var db = mongoose.connection;

app.use('/api', apiRoutes);

app.get('/', function(req, res) {
    console.log('Hi!');
    res.send('Hello World!');
});

app.listen(port, function() {
    console.log('App listening on port 3000');
    
});


