import requests
import json
import csv
from geopy.geocoders import Nominatim

#https://dph.illinois.gov/covid19/covid-19-testing-sites
#Illinois government testing

url = "https://dph.illinois.gov/sitefiles/COVIDTestingSites.json"
r = requests.get(url).json()
data = []
longit = ""
latit = ""
geolocater = Nominatim(user_agent="covidwebapp")
filename = "WebScrapers/testing-sites.csv"
fields = ['locationName', 'hours', 'daysofoperation', 'requirements','webcovidhotline','address','city','zip','website','state','languagesoffered', 'latitude', 'longitude']
for site in r['features']: 
    data.append({
        0 : site['properties']
    })
with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
    csvwriter = csv.writer(csvfile)
    csvwriter.writerow(fields)
    for testing in data:
       for test in testing.values():
           location = geolocater.geocode(test['address'] + "," + test['city'] + "," + test['state'] + "," + test['zip'])
           if location is not None and location.longitude is not None:
               longit = location.longitude
           if location is not None and location.latitude is not None:
               latit = location.latitude
           row = [test['locationName'].replace(',', '*'), test['hours'].replace(',', '*'), test['daysofoperation'].replace(',', '*'), test['requirements'].replace(',', '*'), test['webcovidhotline'].replace(',', '*'), test['address'].replace(',', '*'), test['city'].replace(',', '*'), test['zip'].replace(',', '*'), test['website'].replace(',', '*'), test['state'].replace(',', '*'), test['languagesoffered'].replace(',', '*'), latit, longit]
           csvwriter.writerow(row)