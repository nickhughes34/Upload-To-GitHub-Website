var fs = require('fs');
var bodyParser = require("body-parser");
var express = require('express');
var mysql = require('mysql');

// Connection settings for Amazon RDS MySql Database.
var connection = mysql.createConnection({
  host     : "example-example.f34tyhuikjq3.us-east-2.rds.amazonaws.com",
  database : "example",
  user     : "example",
  password : "example",
  //port     : example
});

var myapp = express();


// Used to parse input data
myapp.use(bodyParser.json());
myapp.use(bodyParser.urlencoded({extended: true}));

myapp.use(express.static('./'));

// Conection to Amazon AWS RDS MySql Database.
connection.connect(function(err) {
  if (err) throw err;
 console.log('Connected to database.');
});

// Used to route data to the html-angular.js file.
myapp.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

//Gets the data from the database.
myapp.get("/data", function (req, res) {
  connection.query("SELECT * FROM Shoes", function (err, results){
    if (err) throw err;
    res.json(results);
  });
});

// sends the data to the database.
myapp.post('/send', function(req, res){
  let send = "INSERT INTO `Shoes` (`Large`, `Medium`, `Small`) VALUES (105,100,100);";
  connection.query(send, function (err, results){
    if (err) throw err;
    res.json(results);
  });
});

myapp.use(express.static('./'));
// Opens index page at localhost:8080.
myapp.get('/', function(req, res) {
  res.render('./index.html');
});

// Listening on port 8080.
myapp.listen(8080, function () {
  console.log("App Listening on port 8080");
});
