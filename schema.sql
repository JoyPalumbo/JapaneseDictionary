DROP DATABASE IF EXISTS english_japanese_dictionary;

CREATE DATABASE english_japanese_dictionary;

USE english_japanese_dictionary;

CREATE TABLE words (
  id int NOT NULL AUTO_INCREMENT,
  english varchar(50) NOT NULL,
  hirigana varchar(50) NOT NULL,
  kanji varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    //mysql -u root -p
 mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
