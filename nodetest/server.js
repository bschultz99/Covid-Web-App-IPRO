//Require statements
var path = require('path');

//Exppress hosting
var express = require('express');
var app = express();

//Points express to the correct folder
app.use(express.static('./'))

//Listens on port 3000 for hosting
app.listen(3000);
