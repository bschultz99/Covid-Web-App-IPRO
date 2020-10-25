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
    languages = REPLACE(languages,'*',',');