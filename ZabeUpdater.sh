date=$(date +"%m%d%y")

#Location of all files
cd /home/covid19webapp/Desktop/Covid-Wep-App-IPRO

#Update ant changes of the website
git pull

#Run any necessary scripts
python3 WebScrapers/DPH-Illinois.py
python3 WebScrapers/City-Of-Chicago.py

#Commit info back to Github
git commit -m "AutoCommit on $date"
git push
