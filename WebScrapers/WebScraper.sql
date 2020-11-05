use testing_sites;

TRUNCATE TABLE illinois;

LOAD DATA LOCAL INFILE '/home/covid19webapp/Desktop/Covid-Wep-App-IPRO/WebScrapers/testing-sites.csv'
INTO TABLE illinois
CHARACTER SET utf8
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(location_name,hours,days,requirements,phone,location,city,zip,website,state,languages,latitude,longitude);

UPDATE illinois
    SET location_name = REPLACE(location_name, '*',','), 
    hours = REPLACE(hours, '*', ','),
    days = REPLACE(days, '*',','),
    requirements = REPLACE(requirements, '*',','),
    phone = REPLACE(phone, '*',','),
    location = REPLACE(location,'*',','),
    city = REPLACE(city,'*',','),
    zip = REPLACE(zip,'*',','),
    website = REPLACE(website,'*',','),
    state = REPLACE(state,'*',','),
    languages = REPLACE(languages,'*',','),
    latitude = REPLACE(latitude,'*',','),
    longitude = REPLACE(longitude,'*',',');
