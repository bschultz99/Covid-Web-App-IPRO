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
con.connect((err) => {
    if(err){
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});
con.end((err) => {
});

//Points express to the correct folder
app.use(express.static('./public'))

//Listens on port 3000 for hosting
app.listen(3000);
