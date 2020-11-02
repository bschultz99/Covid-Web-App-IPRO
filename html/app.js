const mysql = require('mysql');
console.log('starting mysql')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ZabeSaveMe2020!'
});

con.connect((err) => {
    if(err){
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

con.end((err) => {
});
