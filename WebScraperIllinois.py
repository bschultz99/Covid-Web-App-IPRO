import urllib.request
from bs4 import BeautifulSoup
import pprint

#https://dph.illinois.gov/covid19/covid-19-testing-sites
#Illinois government testing

source = urllib.request.urlopen('https://dph.illinois.gov/covid19/covid-19-testing-sites').read()
soup = BeautifulSoup(source, 'lxml')
for div in soup.find_all('div', class_='listings'):
    print(div.text)