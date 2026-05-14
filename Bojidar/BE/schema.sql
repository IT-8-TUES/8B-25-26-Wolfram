CREATE DATABASE playerAccount;
USE playerAccount;

CREATE TABLE accounts(
    id integer PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

INSERT INTO accounts (username, password)
VALUES
('TEST3R', '.--. .- ... ... .-- --- .-. -..'),
('flymars200', 'lowkey e slab na hollow knight');