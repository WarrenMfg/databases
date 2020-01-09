var Messages = {

  _storage: {messages: []},
  _friends: {},

  load: function(data) { // object
    Messages._storage = {};
    Messages._storage.roomNames = {};

    Messages._storage.messages = data.results.map(function(message) {
      if (!message.username) {
        message.username = 'NA';
      }
      if (!message.roomname) {
        message.roomname = 'NA';
      }
      if (!message.text) {
        message.text = 'NA';
      }
      Messages._storage.roomNames[message.roomname] = true;
      return message;
    });

    Messages.show();
    Rooms.load(Messages._storage.roomNames);
  },

  show: function(roomname = '') {
    MessagesView.render(Messages._storage.messages.filter(m => {
      return roomname === '' || roomname === 'SELECT A ROOM' || m.roomname === roomname;
    }), Messages._friends);
  },

  post: function(inputMessage) {
    let message = {
      username: App.username,
      text: inputMessage,
      roomname: Rooms.roomname
    };

    Parse.create(message);

    Messages._storage.messages.unshift(message);
    Messages.show(Rooms.roomname);
  },

  toggleFriend: function(username) {
    if (Messages._friends[username]) {
      delete Messages._friends[username];
    } else {
      Messages._friends[username] = true;
    }
    Messages.show(Rooms.roomname);
  }

};