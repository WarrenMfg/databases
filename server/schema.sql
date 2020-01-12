CREATE DATABASE chat;
USE chat;

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  text varchar(200) NOT NULL,
  roomname varchar(20),
  PRIMARY KEY (ID)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(40) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT,
  roomname varchar(20),
  PRIMARY KEY (ID)
);


-- CREATE TABLE rooms (
--   id integer NOT NULL AUTO_INCREMENT, `name` varchar(255), PRIMARY KEY(id)
-- );

-- CREATE TABLE users (
--   id integer NOT NULL AUTO_INCREMENT, `name` varchar(255), PRIMARY KEY(id)
-- );

-- CREATE TABLE messages (
--   id integer NOT NULL AUTO_INCREMENT, PRIMARY KEY(id), content text, createdAt timestamp default current_timestamp, user integer, room integer
-- )
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

