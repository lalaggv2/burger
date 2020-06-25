DROP DATABASE IF EXISTS burgersDB;
CREATE database burgersDB;

USE burgersDB;

CREATE TABLE burgers
(
 id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
 burger_name VARCHAR(255) NOT NULL,
 devoured BOOLEAN DEFAULT false,
 createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp
);
