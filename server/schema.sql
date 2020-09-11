CREATE DATABASE chat;

USE chat;




/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(20)
);

CREATE TABLE lobbies (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20)
);

CREATE TABLE messages (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  messageText VARCHAR(250),
  createdAt timestamp,
  idUsers INT NOT NULL,
  roomname VARCHAR(20),
  FOREIGN KEY (idUsers) REFERENCES users (id)

);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
