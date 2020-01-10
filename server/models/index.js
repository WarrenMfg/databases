var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('select user, content, room from messages', (err, messages) => {
        callback(err, messages);
      });
    }, // a function which produces all the messages

    post: function (params, callback) {
      db.query('insert INTO messages (user, content, room) VALUE ((select id from users where name = ? limit 1), ?, (select id from rooms where name = ?))', params, (err, results) => {
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
      db.query('insert INTO users (name) VALUES (?);', params, function (err, results) {
        callback(err, results);
      }
      );
    }
  }
};

