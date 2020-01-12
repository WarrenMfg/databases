var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, msgs) => {
        if (err) {
          console.log('models.messages.get error!!!', err);
        } else {;
          res.json(msgs);
        }
      });
    }, // a function which handles a get request for all messages

    post: function (req, res) {
      let params = [req.body.username, req.body.text, req.body.roomname];

      models.users.post(params[0], (err, results) => {
        if (err) {
          console.log('models.users.post, inside of controllers.messages.post', err);
        } else {
          models.rooms.post(params[2], (err, results) => {
            if (err) {
              console.log('models.rooms.post, inside of controllers.messages.post', err);
            } else {
              models.messages.post(params, (err, results) => {
                if (err) {
                  console.log('models.messages.post error !!!', err);
                } else {
                  res.sendStatus(201);
                }
              });
            }
          })
        }
      });
    } // a function which handles posting a message to the database

  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, users) => {
        if (err) {
          console.log('models.users.get error!!!');
        } else {;
          res.json(users);
        }
      });
    },
    post: function (req, res) {
      let params = [req.body.username];
      models.users.post(params, (err, results) => {
        if (err) {
          console.log('models.users.post error!!!' + err);
        } else {;
          res.sendStatus(201);
        }
      });
    }
  }
};

