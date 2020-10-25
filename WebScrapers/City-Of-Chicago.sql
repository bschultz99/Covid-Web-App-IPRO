use testing_sites;

TRUCNCATE TABLE chicago;

LOAD DATA LOCAL INFILE '/home/covid19webapp/Desktop/Covid-Wep-App-IPRO/WebScrapers/City-Of-Chicago.csv'
INTO TABLE chicago
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(facility,phone,address,url)