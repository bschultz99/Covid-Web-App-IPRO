const mysql = require('mysql');
console.log('starting mysql')

var con = mysql.createConnection({
    host: 'd41robot.asuscomm.com',
    user: 'covid19webapp',
    password: 'zabe'
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