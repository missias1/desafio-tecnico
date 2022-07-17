DROP DATABASE IF EXISTS DesafioTecnico;

CREATE DATABASE DesafioTecnico;

USE DesafioTecnico;

CREATE TABLE clients (
    client_id INT NOT NULL auto_increment,
    name VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL,
    password INT NOT NULL,
    balance DECIMAL NOT NULL,
    PRIMARY KEY (client_id)
) ENGINE=INNODB;

INSERT INTO DesafioTecnico.clients (name, email, password, balance) VALUES 
("Jose Pedro", "zezinho@gmail.com", 123456, 10000),
("Luiz Carlos", "luizinho@gmail.com", 123456, 20000),
("Fernada Santos", "fernanda@gmail.com", 123456, 50000),
("Ana Souza","aninha@gmail.com", 123456, 1000);

CREATE TABLE assets (
    asset_id INT NOT NULL,
    name_asset VARCHAR(5),
    price DECIMAL(5,2),
    quantity_available INT NOT NULL,
    PRIMARY KEY(asset_id)
) ENGINE=INNODB;

INSERT INTO DesafioTecnico.assets (asset_id, name_asset, price, quantity_available) VALUES
(8465, "ITSA4", 8.35, 5000),
(8171, "RENT3", 54.40, 5000),
(8458, "MGLU3", 2.80, 5000),
(8423, "RENT3", 54.00, 5000),
(8233, "LEVE3", 23.00, 5000),
(8467, "WEGE3", 26.55, 5000),
(8321, "ENEV3", 14.95, 5000),
(8200, "FLRY3", 16.35, 5000),
(8869, "GRND3", 6.50, 5000),
(8815, "MOVI3", 12.20, 5000);

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

INSERT INTO DesafioTecnico.assets_clients (asset_id, client_id, quantity_asset) VALUES 
(8465, 1, 100),
(8171, 1, 50),
(8458, 1, 40),
(8423, 2, 200),
(8233, 2, 150),
(8467, 2, 300),
(8321, 3, 100),
(8171, 3, 100),
(8869, 4, 250),
(8815, 4, 250);
