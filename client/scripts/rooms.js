var Rooms = {

  roomname: '',
  roomnames: {},

  load: function(roomnames) {
    Rooms.roomnames = roomnames;
    RoomsView.load(Rooms.roomnames);
  },

  changeRoom: function(roomname) {
    Rooms.roomname = roomname;
    if (roomname !== 'SELECT A ROOM') {
      Rooms.roomnames[roomname] = true;
    };
    Messages.show(roomname);
    RoomsView.load(Rooms.roomnames, roomname);
  }

  // add event handler for select element
    // update Rooms.roomname onchange

};