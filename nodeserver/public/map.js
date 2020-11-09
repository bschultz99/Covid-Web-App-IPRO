//Include server.js
//var mysql = require('mysql')

//Set API Token
mapboxgl.accessToken = 'pk.eyJ1IjoiandhZ2xlciIsImEiOiJja2d4dms3dGUwNWU0Mnl0OG5pcTZycTZlIn0.Cp002MjA3sIzuSSDoNWsYw';

//Global
var mapBounds;

//Get max and min coords
function getCoords(data) {
	//Declare original values
	var minLat = data[0]['longitude'];
	var minLong = data[0]['latitude'];
	var maxLat = data[0]['longitude'];
	var maxLong = data[0]['latitude'];

	//Loop through to find values
	//Ugly af, sorry
	for (x in data) {
		if ((data[x]['longitude'] != null) && (data[x]['latitude'] != null)) {
			if (minLat > data[x]['longitude']) {
				minLat = data[x]['longitude'];
			}
			if (minLong > data[x]['latitude']) {
				minLong = data[x]['latitude'];
			}
			if (maxLat < data[x]['longitude']) {
				maxLat = data[x]['longitude'];
			}
			if (maxLong < data[x]['latitude']) {
				maxLong = data[x]['latitude'];
			}
		}
	}

	//Add buffer
	minLat = minLat - 0.1;
	minLong = minLong - 0.1;
	maxLat = maxLat + 0.1;
	maxLong = maxLong + 0.1;

	//Print
	console.log(minLat);
	console.log(minLong);
	console.log(maxLat);
	console.log(maxLong);

	//Set new values
	mapBounds = [
		[minLat, minLong], //Southwest
		[maxLat, maxLong] //Northeast
	]

	//Return value
	//return mapBounds;
}

//Get data for coordinate manipulation
async function fetchSQL() {
	const response = await fetch('/api/locations');
	const data = await response.json();
	console.log(data[0])
	return await data
}
fetchSQL().then(response => getCoords(response))

//Set the boundaries of the map
//var bounds = [
//	[-88.20, 41.60], //Southwest
//	[-87.39, 42.04] //Northeast
//]

//Initialize the map
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [-87.64, 41.87],
	zoom: 12.5,
	maxBounds: mapBounds
});

async function getData() {
	const response = await fetch('/api/locations');
	const data = await response.json();

	var site = []

	//Get data fields
	var name, address, hours, days, requirements, number, website, languages, directions, info;
	var phoneNumber, websiteNoSpace, addressNoSpace, directionsLink;

	for (x in data) {
		//Defaults to null
		name, address, hours, days, requirements, number, website, languages, directions, info = null;

		//Change number to be callable
		if (data[x]['webcovidhotline'] != '') {
			phoneNumber = data[x]['webcovidhotline'];
			phoneNumber = phoneNumber.replaceAll("-", "");
		}

		//Get rid of spaces in websites
		if (data[x]['website'] != '') {
			websiteNoSpace = data[x]['website'];
			websiteNoSpace = websiteNoSpace.toLowerCase();
			websiteNoSpace = websiteNoSpace.replaceAll(" ", "");
			if (!websiteNoSpace.includes('http')) {
				websiteNoSpace = 'https://' + websiteNoSpace;
			}
		}

		//Get directions link
		addressNoSpace = data[x]['address'];
		addressNoSpace = addressNoSpace.replaceAll(" ", "+");
		directionsLink = 'https://www.google.com/maps/dir//' + data[x]['address'] + '+' + data[x]['city'] + '+' + data[x]['state'];

		//Set data for manipulation
		name = '<h3>' + data[x]['locationName'] + '</h3>'
		address = '<p><b>' + 'Address: ' + '</b>' + data[x]['address'] + ', ' + data[x]['city'] + ', ' + data[x]['state'] + ' ' + data[x]['zip'] + '</p>';

		if (data[x]['hours'] != '') {
			hours = '<p><b>' + 'Hours: ' + '</b>' + data[x]['hours'] + '</p>';
		}
		if (data[x]['daysofoperation'] != '') {
			days = '<p><b>' + 'Days Open: ' + '</b>' + data[x]['daysofoperation'] + '</p>';
		}
		if (data[x]['requirements'] != '') {
			requirements = '<p><b>' + 'Testing Requirements: ' + '</b>' + data[x]['requirements'] + '</p>';
		}
		if (data[x]['webcovidhotline'] != '') {
			number = '<p><b>' + 'Phone Number: ' + '</b>' + '<a href="tel:' + phoneNumber + '">' + data[x]['webcovidhotline'] + '</a></p>';
		}
		if (data[x]['website'] != '') {
			website = '<p><b>' + 'Website: ' + '</b>' + '<a href="' + websiteNoSpace + '"target="_blank">' + websiteNoSpace + '</a></p>';
		}
		if (data[x]['languagesoffered'] != '') {
			languages = '<p><b>' + 'Languages Offered: ' + '</b>' + data[x]['languagesoffered'] + '</p>';
		}
		directions = '<p style="text-align:center"><a href="' + directionsLink + '"target="_blank">Directions</a></p>';

		info = name + address + hours + days + requirements + number + website + languages + directions;

		site[x] = new mapboxgl.Marker({color: '#CE3F3F'})
		.setLngLat([data[x]['longitude'], data[x]['latitude']])
		.setPopup(new mapboxgl.Popup().setHTML(info))
		.addTo(map);
	}
}

getData();
