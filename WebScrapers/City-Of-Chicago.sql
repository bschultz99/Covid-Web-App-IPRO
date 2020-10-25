use testing_sites;

TRUNCATE TABLE illinois;

LOAD DATA LOCAL INFILE '/home/covid19webapp/Desktop/Covid-Wep-App-IPRO/WebScrapers/DPH-Illinois.csv'
INTO TABLE illinois
CHARACTER SET latin1
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(location_name,hours,days,requirements,phone,location,city,zip,website,state,languages);

UPDATE illinois
SET location_name = REPLACE(location_name, '*',',')
SET hours = REPLACE(hours, '*', ',');