var fs = require('fs');
var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer({ dest: './Images/'});
var app = express();
var mongo = require('mongodb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./'));

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
dbo = db.db('Group4');
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.post('/bio-update/', upload.single('image'),function(req, res){
 var file = __dirname + "\\Images\\" + req.file.originalname;
 var myQuery = "bio";
 var sendData = req.body;
 sendData["image"] = "/Images/" + req.file.originalname;
 sendData["_id"] = myQuery;

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

  myQuery = {_id: "bio"};
  sendData = { $set: sendData};
  dbo.collection("bio").update(myQuery, sendData, function(err, result) {
    if (err) throw err;
    console.log("Server has been updated");
  });
  res.redirect("../index.html");
});

app.post('/bio-data/', function(req, res){
  dbo.collection("bio").find({}).toArray(function(err, result){
      if (err) throw err;
      res.send(result);
  		});
});

app.post('/contacts-update/',function(req, res){
 var myQuery = "contacts";
 var sendData = req.body;
 sendData["_id"] = myQuery;
  myQuery = {_id: "contacts"};
  sendData = { $set: sendData};

  dbo.collection("contacts").update(myQuery, sendData, function(err, result) {
    if (err) throw err;
    console.log("Server has been updated");
  });
  res.redirect("../Pages/contact.html");
});

app.post('/contacts-data/', function(req, res){
  dbo.collection("contacts").find({}).toArray(function(err, result){
      if (err) throw err;
      res.send(result);
  		});
});

app.post('/group-update/',function(req, res){
  dbo.collection("group").insertOne(req.body, function(err, result) {
    if (err) throw err;
    console.log("Server has been updated");
  });
  res.redirect("../Pages/group.html");
});

app.post('/group-data/', function(req, res){
  dbo.collection("group").find({}).toArray(function(err, result){
      if (err) throw err;
      res.send(result);
  		});
});

app.post('/group-update2/', function(req, res){
  dbo.collection("group").drop();
  dbo.collection("group").insertMany(req.body, function(err, result) {
  if (err) throw err;
  });
});

app.post('/news-update/',function(req, res){
  dbo.collection("news").insertOne(req.body, function(err, result) {
    if (err) throw err;
    console.log("Server has been updated");
  });
  res.redirect("../index.html");
});

app.post('/news-data/', function(req, res){
  dbo.collection("news").find({}).toArray(function(err, result){
      if (err) throw err;
      res.send(result);
  		});
});

app.post('/news-update2/', function(req, res){
  dbo.collection("news").drop();
  dbo.collection("news").insertMany(req.body, function(err, result) {
  if (err) throw err;
  });
});

app.post('/press-update/', upload.single('image'), function(req, res){
 var file = __dirname + "\\Images\\" + req.file.originalname;
 var sendData = req.body;
 sendData["image"] = "../Images/" + req.file.originalname;

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

  dbo.collection("press").insertOne(sendData, function(err, result) {
    if (err) throw err;
    console.log("Server has been updated");
  });
  res.redirect("../Pages/press.html");
});

app.post('/press-data/', function(req, res){
  dbo.collection("press").find({}).toArray(function(err, result){
      if (err) throw err;
      res.send(result);
  		});
});

app.post('/press-update2/', function(req, res){
  dbo.collection("press").drop();
  dbo.collection("press").insertMany(req.body, function(err, result) {
  if (err) throw err;
  });
});

app.post('/pub-update/',function(req, res){
  dbo.collection("pub").insertOne(req.body, function(err, result) {
    if (err) throw err;
    console.log("Server has been updated");
  });
  res.redirect("../Pages/pub.html");
});

app.post('/pub-data/', function(req, res){
  dbo.collection("pub").find({}).toArray(function(err, result){
      if (err) throw err;
      res.send(result);
  		});
});

app.post('/pub-update2/', function(req, res){
  dbo.collection("pub").drop();
  dbo.collection("pub").insertMany(req.body, function(err, result) {
  if (err) throw err;
  });
});

app.post('/research-update/', upload.single("image"), function(req, res){
 var sendData = req.body;
 var file = __dirname + "\\Images\\" + req.file.originalname;
 sendData["image1"] = "../Images/" + req.file.originalname;

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

  dbo.collection("research").insertOne(sendData, function(err, result) {
    if (err) throw err;
    console.log("Server has been updated");
  });
  res.redirect("../Pages/research.html");
});

app.post('/research-data/', function(req, res){
  dbo.collection("research").find({}).toArray(function(err, result){
      if (err) throw err;
      res.send(result);
  		});
});

app.post('/research-update2/', function(req, res){
  dbo.collection("research").drop();
  dbo.collection("research").insertMany(req.body, function(err, result) {
  if (err) throw err;
  });
});

app.post('/teaching-update/',function(req, res){
  dbo.collection("teaching").insertOne(req.body, function(err, result) {
    if (err) throw err;
    console.log("Server has been updated");
  });
  res.redirect("../Pages/teaching.html");
});

app.post('/teaching-data/', function(req, res){
  dbo.collection("teaching").find({}).toArray(function(err, result){
      if (err) throw err;
      res.send(result);
  		});
});

app.post('/teaching-update2/', function(req, res){
  dbo.collection("teaching").drop();
  dbo.collection("teaching").insertMany(req.body, function(err, result) {
  if (err) throw err;
  });
});

app.post('/mode-update/',function(req, res){
 var myQuery = "mode";
 var sendData = req.body;
 sendData["_id"] = myQuery;
  myQuery = {_id: "mode"};
  sendData = { $set: sendData};

  dbo.collection("mode").update(myQuery, sendData, function(err, result) {
    if (err) throw err;
    console.log("Server has been updated");
  });
});

app.post('/mode-data/', function(req, res){
  dbo.collection("mode").find({}).toArray(function(err, result){
      if (err) throw err;
      res.send(result);
  		});
});
app.listen(8080);
