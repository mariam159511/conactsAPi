// Import express
var express = require('express')
var mongoose =require('mongoose0');
var bodyParser =require('bodyPaser');
//import our router
var apiRouters = require('./api-router')


// Initialize the app
var app = express();

//body-perser to handle POST requ
app.use(bodyParser.urlencoded({
     extteended: true
}
));

app.use(bodyParser.jason());

//contect to the mongodb
mongoose.connect('mongodb://localhost/contacts');
var db = mongoose.connection;

// Setup server port
var port = process.env.PORT || 8080;
// What is process.env.PORT?? Find out by console.logging it:
//console.log(process.env);

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

app.use('/api',apiRouters);

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running API on port " + port);
});