//Require Statements
//var mysql = require('mysql');

//Set API Token
mapboxgl.accessToken = 'pk.eyJ1IjoiandhZ2xlciIsImEiOiJja2d4dms3dGUwNWU0Mnl0OG5pcTZycTZlIn0.Cp002MjA3sIzuSSDoNWsYw';

//Set the boundaries of the map
var bounds = [
	[-88.20, 41.60], //Southwest
	[-87.39, 42.04] //Northeast
]

//Initialize the map
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [-87.64, 41.87],
	zoom: 12.5,
	maxBounds: bounds
});

/*
//Connect to SQL Server
var con = mysql.createConnection({
	  database: "testing_sites",
	  host: "localhost",
	  user: "root",
	  password: "ZabeSaveMe2020!",
	  insecureAuth: true
});

//Connection Status
con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
});*/
