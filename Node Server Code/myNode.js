// Required variables
var fs = require('fs');
var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer({ dest: './images/'});
var app = express();
var mongo = require('mongodb');

// Used to parse input data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./'));


// These lines of code starts the database client and creates one called 'Data'
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
dbo = db.db('lab10');
});


// Used to route data to the myJs.js
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});


// POST request for /update/
app.post('/update/', upload.single('image'), function(req, res){
 var file = __dirname + "\\images\\" + req.file.originalname;
 console.log(req.file.originalname);

 var sendData = req.body;
 sendData["image"] = req.file.originalname;
 console.log(sendData);


  fs.readFile(req.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
         if( err ){
              console.error( err );
              response = {
                   message: 'Sorry, file couldn\'t be uploaded.',
                   filename: req.file.originalname
              };
         }else{
               response = {
                   message: 'File uploaded successfully',
                   filename: req.file.originalname
              };
          }
          JSON.stringify(response);
       });
       });

  fs.rename(req.file.path, file, function(err) {
    if (err) {
      console.log(err);
    }
      });
  dbo.collection("info").insertOne(req.body, function(err, result) {
  	if (err) throw err;
  	console.log("1 document inserted");
  	res.send(req.body);
  });
});

// GET request for /data/
app.get('/data/', function(req, res){
  dbo.collection("info").find({}).toArray(function(err, result){
  		if (err) throw err;
      res.json(result);
  		});
});


// Opens index page when localhost:8080 is typed in.
app.use(express.static('./'));
app.get('/', function(req, res) {
  res.render('index.html');
});

// Will run on port 8080
app.listen(8080);
