DROP DATABASE IF EXISTS burgersDB;
CREATE database burgerDB;

USE burgerDB;

CREATE TABLE burgers
(
 id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
 burger_name VARCHAR(255) NOT NULL,
 devoured BOOL DEFAULT false,
 createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
);
