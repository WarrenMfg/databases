var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) { // select user, content, room from messages
      db.query('select messages.id, messages.text, messages.roomname, users.username from messages left outer join users on (messages.userid = users.id) order by messages.id desc', (err, messages) => {
        callback(err, messages);
      });
    }, // a function which produces all the messages

    post: function (params, callback) {
      db.query('insert INTO messages (userid, text, roomname) VALUE ((select id from users where username = ? limit 1), ?, ?)', params, (err, results) => {
        callback(err, results);
      });
    } // a function which can be used to insert a message into the database
  },

  // id integer , content text, createdAt timestamp default current_timestamp

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('select * from users', (err, users) => {
        callback(err, users);
      });
    },
    post: function (params, callback) {
      db.query('insert INTO users (username) VALUES (?);', params, function (err, results) {
        callback(err, results);
      }
      );
    }
  }
};

