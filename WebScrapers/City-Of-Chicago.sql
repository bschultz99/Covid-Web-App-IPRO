use testing_sites;

TRUNCATE TABLE illinois;

LOAD DATA LOCAL INFILE '/home/covid19webapp/Desktop/Covid-Wep-App-IPRO/WebScrapers/City-Of-Chicago.csv'
INTO TABLE illinois
CHARACTER SET latin1
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(facility,phone,location,url);

UPDATE illinois
    SET facility = REPLACE(facility, '*',',');
    SET location = REPLACE(location, '*', ',');