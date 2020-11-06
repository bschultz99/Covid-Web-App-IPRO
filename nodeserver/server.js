//Require statements
const path = require('path');
const fs = require('fs').promises;
const { promisify } = require('util');
const { addAsync } = require('@awaitjs/express');
//const mysql = require('mysql2/promise');

//Express hosting
const express = require('express');
const app = addAsync(express());

// // Connect to MySQL
// console.log('starting mysql')
// const sql = await mysql.createConnection({
//     database: 'testing_sites',
//     host: 'localhost',
//     user: 'root',
//     password: 'ZabeSaveMe2020!'
// });

// //Start MySQL connection
// const app = addAsync(express());

//Points express to the correct folder
app.use(express.static('./public'))

app.getAsync('/api/locations', async (req, res) => {
    
    const data = JSON.parse(await fs.readFile('./public/data.json', 'utf-8'));
    res.json(data);
    res.end();
})

// app.getAsync('/api/locations_sql', async (req, res) => {
//     const [rows, columnNames] = await sql.query('select * from covid');
//     console.log(rows);
//     res.json(rows);
//     res.end();
// })

app.listen(3000);