date=$(date +"%m%d%y")

#Location of all files
cd /home/covid19webapp/Desktop/Covid-Wep-App-IPRO

#Update ant changes of the website
git pull

#Run any python scripts
python3 WebScrapers/DPH-Illinois.py
python3 WebScrapers/City-Of-Chicago.py

#Run any SQL scripts
mysql --local-infile=1 -h localhost -u root -pZabeSaveMe2020! testing_sites < WebScraper.sql

#Commit info back to Github
git commit -m "AutoCommit on $date"
git push
