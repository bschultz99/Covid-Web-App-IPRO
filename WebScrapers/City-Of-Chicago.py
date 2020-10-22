import requests
import json
import csv

#City of Chicago Data Portal
#https://data.cityofchicago.org/Health-Human-Services/COVID-19-Testing-Sites/thdn-3grx/data

url = "https://data.cityofchicago.org/resource/thdn-3grx.json"
r = requests.get(url).json()
data = []
filename = "City-Of-Chicago.csv"
fields = ['facility','phone','address','url']
i = 0
for site in r: 
    data.append({
        0 : site
    })

with open(filename, 'w', newline='') as csvfile:
    csvwriter = csv.writer(csvfile)
    csvwriter.writerow(fields)
    for testing in data:
       for test in testing.values():
           try:
               row = [test['facility'], test['phone'], test['address'], test['web_site']['url']]
               csvwriter.writerow(row)
            except KeyError:
                continue