var express = require('express');
var app = express();
var path = require('path');
var requirejs = require('requirejs')

app.use(express.static('./public'))

app.listen(3000);
