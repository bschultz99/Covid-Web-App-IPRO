import requests
import json
import csv

#City of Chicago Data Portal
#https://data.cityofchicago.org/Health-Human-Services/COVID-19-Testing-Sites/thdn-3grx/data

url = "https://data.cityofchicago.org/resource/thdn-3grx.json"
r = requests.get(url).json()
data = []
filename = "WebScrapers/City-Of-Chicago.csv"
fields = ['facility','phone','address','url']
for site in r: 
    data.append({
        0 : site
    })

with open(filename, 'w', newline='') as csvfile:
    csvwriter = csv.writer(csvfile)
    csvwriter.writerow(fields)
    for testing in data:
       for test in testing.values():
           web_site = test.get('web_site') or {}
           row = [test['facility'].replace(',', '*'), test.get('phone'), test['address'].replace(',','*'), web_site.get('url')]
           csvwriter.writerow(row)
           print(test['facility'].replace(',', '*'))

