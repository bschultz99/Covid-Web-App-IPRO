//Require statements
var path = require('path');
var mysql = require('mysql');

//Exppress hosting
var express = require('express');
var app = express();

//Create connection credentials
console.log('starting mysql')
var con = mysql.createConnection({
    host: 'd41robot.asuscomm.com',
    user: 'covid19webapp',
    password: 'zabe'
});

//Start MySQL connection
con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
});

//Points express to the correct folder
app.use(express.static('./public'))

//Listens on port 3000 for hosting
app.listen(3000);
