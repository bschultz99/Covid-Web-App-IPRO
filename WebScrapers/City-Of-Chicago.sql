use testing_sites;

TRUNCATE TABLE illinois;

LOAD DATA LOCAL INFILE '/home/covid19webapp/Desktop/Covid-Wep-App-IPRO/WebScrapers/City-Of-Chicago.csv'
INTO TABLE illinois
CHARACTER SET latin1
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(locationName,hours,daysofoperation,requirements,webcovidhotline,address,city,zip,website,state,languagesoffered);

UPDATE illinois
    SET location_name = REPLACE(facility, '*',',');
    SET hours = REPLACE(location, '*', ',');