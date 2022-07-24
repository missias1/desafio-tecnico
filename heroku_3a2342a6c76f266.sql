DROP DATABASE IF EXISTS heroku_3a2342a6c76f266;

CREATE DATABASE heroku_3a2342a6c76f266;

USE heroku_3a2342a6c76f266;

CREATE TABLE clients (
    client_id INT NOT NULL auto_increment,
    name VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL,
    password INT NOT NULL,
	telephone VARCHAR(11) NOT NULL,
    balance DECIMAL,
    PRIMARY KEY (client_id)
) ENGINE=INNODB;

INSERT INTO heroku_3a2342a6c76f266.clients (name, email, password, telephone, balance) VALUES 
("Jose Pedro", "zezinho@gmail.com", 123456, "27988884444", 10000),
("Luiz Carlos", "luizinho@gmail.com", 123456, "27997775555", 20000),
("Fernada Santos", "fernanda@gmail.com", 123456, "27988883333", 50000),
("Ana Souza","aninha@gmail.com", 123456, "27988882222", 1000);

CREATE TABLE assets (
    asset_id INT NOT NULL auto_increment,
    name_asset VARCHAR(5),
    price DECIMAL(5,2),
    quantity_available INT NOT NULL,
    PRIMARY KEY(asset_id)
) ENGINE=INNODB;

INSERT INTO heroku_3a2342a6c76f266.assets (name_asset, price, quantity_available) VALUES
("ITSA4", 8.35, 5000),
("RENT3", 54.40, 5000),
("MGLU3", 2.80, 5000),
("RENT3", 54.00, 5000),
("LEVE3", 23.00, 5000),
("WEGE3", 26.55, 5000),
("ENEV3", 14.95, 5000),
("FLRY3", 16.35, 5000),
("GRND3", 6.50, 5000),
("MOVI3", 12.20, 5000);

CREATE TABLE assets_clients (
    asset_id INT NOT NULL,
    client_id INT NOT NULL,
    quantity_asset INT NOT NULL,
    FOREIGN KEY (asset_id)
        REFERENCES assets (asset_id)
        ON DELETE CASCADE,
    FOREIGN KEY (client_id)
        REFERENCES clients (client_id)
        ON DELETE CASCADE
) ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;

INSERT INTO heroku_3a2342a6c76f266.assets_clients (asset_id, client_id, quantity_asset) VALUES 
(1, 1, 100),
(2, 1, 50),
(3, 1, 40),
(4, 2, 200),
(5, 2, 150),
(6, 2, 300),
(7, 3, 100),
(8, 3, 100),
(4, 3, 100),
(9, 4, 250),
(2, 4, 250),
(10, 4, 250);
