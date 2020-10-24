use testing_sites;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT, 
    first_name VARCHAR(255) NOT NULL, 
    last_name VARCHAR(255) NOT NULL, 
    email VARCHAR(255) NOT NULL, 
    transactions INT NOT NULL, 
    account_creation DATE NOT NULL, 
    PRIMARY KEY (id));