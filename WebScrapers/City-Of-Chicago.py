import requests
import json
import csv

#City of Chicago Data Portal
#https://data.cityofchicago.org/Health-Human-Services/COVID-19-Testing-Sites/thdn-3grx/data

url = "https://data.cityofchicago.org/resource/thdn-3grx.json"
r = requests.get(url).json()
data = []
filename = "WebScrapers/testing-sites.csv"
fields = ['locationName', 'hours', 'daysofoperation', 'requirements','webcovidhotline','address','city','zip','website','state','languagesoffered']
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
           row = [test['facility'].replace(',', '*'),'','','', test.get('phone'), street[0].replace(',','*'),'Chicago',street[1], web_site.get('url'), 'IL','']
           csvwriter.writerow(row)