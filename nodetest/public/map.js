//Require MySQL
const mysql = require('mysql');

//Set API Token
mapboxgl.accessToken = 'pk.eyJ1IjoiandhZ2xlciIsImEiOiJja2d4dms3dGUwNWU0Mnl0OG5pcTZycTZlIn0.Cp002MjA3sIzuSSDoNWsYw';

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
