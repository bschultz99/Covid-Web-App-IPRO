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

var site1 = new mapboxgl.Marker()
.setLngLat([-87.603680, 41.789510])
.setPopup(new mapboxgl.Popup().setHTML('<h1>University of Chicago Hospital - Hyde Park</h1>')) // add popup
.addTo(map);

var site2 = new mapboxgl.Marker()
.setLngLat([-87.708320, 41.967510])
.setPopup(new mapboxgl.Popup().setHTML('<h1>Pharmacy One Plus</h1>')) // add popup
.addTo(map);

var site3 = new mapboxgl.Marker()
.setLngLat([-87.765800, 41.920940])
.setPopup(new mapboxgl.Popup().setHTML('<h1>Dr. Jorge Prieto Math and Science Academy</h1>')) // add popup                                                                                                                                                                              .
.addTo(map);

var site4 = new mapboxgl.Marker()
.setLngLat([-87.722070, 41.968000])
.setPopup(new mapboxgl.Popup().setHTML('<h1>Heartland Health Center - Albany Park</h1>')) // add popup                                                                                                                                                                              .
.addTo(map);

var site5 = new mapboxgl.Marker()
.setLngLat([-87.64931, 41.94134])
.setPopup(new mapboxgl.Popup().setHTML('<h1>Howard Brown Health Halsted</h1>')) // add popup                                                                                                                                                                              .
.addTo(map);

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
