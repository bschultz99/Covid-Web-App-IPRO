import requests
from bs4 import BeautifulSoup
import pprint

URL = 'https://www.aepks.com/'
page = requests.get(URL)
soup = BeautifulSoup(page.content, 'html.parser')
