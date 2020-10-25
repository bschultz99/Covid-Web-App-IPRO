use testing_sites;

TRUNCATE TABLE chicago;

LOAD DATA LOCAL INFILE '/home/covid19webapp/Desktop/Covid-Wep-App-IPRO/WebScrapers/City-Of-Chicago.csv'
INTO TABLE chicago
CHARACTER SET latin1
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(facility,phone,address,url);

UPDATE chicago
SET facility = REPLACE(facility, '*',',');
SET location = REPLACE(location, '*', ',');