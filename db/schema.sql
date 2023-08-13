DROP DATABASE IF EXISTS mapbrew_haven_db;

CREATE DATABASE mapbrew_haven_db;

USE mapbrew_haven_db;

CREATE TABLE User (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(30) NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  active BOOLEAN NOT NULL,
  date_added DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
 );

 CREATE TABLE User_creations (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  map_name VARCHAR(30) NOT NULL,
  user_name VARCHAR(30) NOT NULL,
  active BOOLEAN NOT NULL,
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
  upvotes INT NOT NULL,
  FOREIGN KEY (user_name)
  REFERENCES user(user_name)
  ON DELETE SET NULL
 );


CREATE TABLE League (
  id INT NOT NULL AUTO_INCREMENT ,
  user_name VARCHAR(30) NOT NULL,
  map_name VARCHAR(30) NOT NULL,
  user_reviews TEXT NOT NULL,
  available BOOLEAN NOT NULL,
  date_updated DATETIME NOT NULL
  FOREIGN KEY (user_name)
  REFERENCES user(user_name)
  FOREIGN KEY (map_name)
  REFERENCES user_creations(map_name)
  ON DELETE SET NULL
 );

