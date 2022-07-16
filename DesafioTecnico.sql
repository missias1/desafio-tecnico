DROP DATABASE IF EXISTS DesafioTecnico;

CREATE DATABASE DesafioTecnico;

USE DesafioTecnico;

CREATE TABLE clients (
    id_client INT NOT NULL auto_increment,
    name VACHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL,
    password INT NOT NULL,
    balance DECIMAL NOT NULL,
    PRIMARY KEY (id_client)
) ENGINE=INNODB;

CREATE TABLE assets (
    id_asset INT NOT NULL,
    name_asset VARCHAR(5),
    price DECIMAL,
    quantity_available INT NOT NULL
    PRIMARY KEY(id_asset)
) ENGINE=INNODB;

CREATE TABLE assets_clients (
    id_asset INT NOT NULL,
    id_client INT NOT NULL,
    quantity_asset INT NOT NULL,
    FOREIGN KEY (id_asset)
        REFERENCES asset (id_asset)
        ON DELETE CASCADE
    FOREIGN KEY (id_client)
        REFERENCES clients (id_client)
) ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;

INSERT INTO DesafioTecnico.clients (id_client, email, password, balance) VALUES 
(zezinho@gmail.com, 123456, 10000),
(luizinho@gmail.com, 123456, 20000),
(fernanda@gmail.com, 123456, 50000)
(aninha@gmail.com, 123456, 1000);

INSERT INTO DesafioTecnico.assets (id_asset, name_asset, price, quantity_available) VALUES
(8465, ITSA4, 8.35, 5000),
(8171, RENT3, 54.40, 5000),
(9458, MGLU3, 2.80, 5000),
(2423, RENT3, 54.00, 5000),
(9233, LEVE3, 23.00, 5000),
(9467, WEGE3, 26.55, 5000),
(3321, ENEV3, 14.95, 5000),
(8171, FLRY3, 16.35, 5000),
(2869, GRND3, 6.50, 5000),
(1815, MOVI3, 12.20, 5000),

INSERT INTO DesafioTecnico.assets_clients (id_asset, id_client, quantity_asset) VALUES 
(8465, 1, 100),
(8171, 1, 50),
(9458, 1, 40),
(2423, 2, 200),
(9233, 2, 150),
(9467, 2, 300),
(3321, 3, 100),
(8171, 3, 100),
(2869, 4, 250),
(1815, 4, 250),
