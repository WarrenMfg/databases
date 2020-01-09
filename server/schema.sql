USE chat;

drop table rooms;
 -- drop table messages;
 drop table users;


CREATE TABLE rooms (
  id integer, `name` varchar(255)
);

CREATE TABLE users (
  id integer, `name` varchar(255)
);

CREATE TABLE messages (
  id integer , content text, createdAt timestamp default current_timestamp
);






/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

