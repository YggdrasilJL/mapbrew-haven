DROP DATABASE IF EXISTS mapbrew_haven_db;

CREATE DATABASE mapbrew_haven_db;

USE mapbrew_haven_db;

-- CREATE TABLE users (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   user_name VARCHAR(30) NOT NULL,
--   first_name VARCHAR(30) NOT NULL,
--   last_name VARCHAR(30) NOT NULL,
--   active BOOLEAN NOT NULL,
--   date_added DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
-- );

-- CREATE TABLE user_creations (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
--   map_name VARCHAR(30) NOT NULL,
--   user_name VARCHAR(30) NOT NULL,
--   active BOOLEAN NOT NULL,
--   date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
-- );


-- CREATE TABLE biome_ice (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
--   tile_name VARCHAR(30) NOT NULL,
--   tile_desc VARCHAR(30) NOT NULL,
--   active BOOLEAN NOT NULL,
--   date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
-- );

-- CREATE TABLE biome_desert (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   tile_name VARCHAR(30) NOT NULL,
--   tile_desc VARCHAR(30) NOT NULL,
--   available BOOLEAN NOT NULL,
--   date_updated DATETIME NOT NULL
-- );

-- CREATE TABLE biome_fire (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   tile_name VARCHAR(30) NOT NULL,
--   tile_desc VARCHAR(30) NOT NULL,
--   available BOOLEAN NOT NULL,
--   date_updated DATETIME NOT NULL
-- );

-- CREATE TABLE mapbrew_league (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   user_names VARCHAR(30) NOT NULL,
--   user_maps VARCHAR(30) NOT NULL,
--   user_reviews TEXT NOT NULL,
--   available BOOLEAN NOT NULL,
--   date_updated DATETIME NOT NULL
-- );
