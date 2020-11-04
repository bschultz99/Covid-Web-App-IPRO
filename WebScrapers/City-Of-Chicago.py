import requests
import json
import csv
from geopy.geocoders import Nominatim

#City of Chicago Data Portal
#https://data.cityofchicago.org/Health-Human-Services/COVID-19-Testing-Sites/thdn-3grx/data

url = "https://data.cityofchicago.org/resource/thdn-3grx.json"
r = requests.get(url).json()
data = []
longit = ""
latit = ""
geolocater = Nominatim(user_agent="covidwebapp")
filename = "WebScrapers/testing-sites.csv"
fields = ['locationName', 'hours', 'daysofoperation', 'requirements','webcovidhotline','address','city','zip','website','state','languagesoffered', 'longitude', 'latitude']
for site in r: 
    data.append({
        0 : site
    })

with open(filename, 'a', newline='') as csvfile:
    csvwriter = csv.writer(csvfile)
    for testing in data:
       for test in testing.values():
           web_site = test.get('web_site') or {}
           street = test['address'].replace('Chicago', '').replace(', Il','IL').replace(', IL', 'IL').split('IL')
           location = geolocater.geocode(street[0] + ",Chicago,IL," + street[1])
           if location is not None and location.longitude is not None:
               longit = location.longitude
           if location is not None and location.latitude is not None:
               latit = location.latitude 
           row = [test['facility'].replace(',', '*'),'','','', test.get('phone'), street[0].replace(',','*'),'Chicago',street[1], web_site.get('url'), 'IL','', longit, latit]
           csvwriter.writerow(row)