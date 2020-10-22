import requests
import json
import csv

#https://dph.illinois.gov/covid19/covid-19-testing-sites
#Illinois government testing

url = "https://dph.illinois.gov/sitefiles/COVIDTestingSites.json"
r = requests.get(url).json()
data = []
filename = "test.csv"
fields = ['locationName', 'hours', 'daysofoperation', 'requirements','webcovidhotline','address','city','zip','website','state','languagesoffered']
for site in r['features']: 
    data.append({
        0 : site['properties']
    })
with open(filename, 'w', newline='') as csvfile:
    csvwriter = csv.writer(csvfile)
    csvwriter.writerow(fields)
    for testing in data:
       for test in testing.values():
           row = [test['locationName'], test['hours'], test['daysofoperation'], test['requirements'], test['webcovidhotline'], test['address'], test['city'], test['zip'], test['website'], test['state'], test['languagesoffered']]
           csvwriter.writerow(row)
