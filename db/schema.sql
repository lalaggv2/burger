DROP DATABASE IF EXISTS burguersDB;
CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE burgers
(
 id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
 burger_name VARCHAR(255) NOT NULL,
 devoured BOOL DEFAULT false,
 createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
);
