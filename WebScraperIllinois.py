import requests
from bs4 import BeautifulSoup
import re
import pprint
import json
#https://dph.illinois.gov/covid19/covid-19-testing-sites
#Illinois government testing

url = "https://dph.illinois.gov/sitefiles/COVIDTestingSites.json"
r = requests.get(url)
cont = r.json()
json.dumps(r, indent=4)