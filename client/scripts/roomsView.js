var RoomsView = {

  $button: $('#add-room'),
  $select: $('#room-select'),
  $addRoom: $('button'),
  $newRoomValue: $('#add-room'),

  initialize: function() {
    RoomsView.$select.change(RoomsView.roomChange);
    RoomsView.$addRoom.click(RoomsView.addRoom);
  },

  load: function(roomnames, roomname = 'SELECT A ROOM') {
    let html = '';
    for (k in roomnames) {
      html += '<option value="' + k + '">' + k + '</option>';
    }

    RoomsView.$select.empty();
    RoomsView.$select.append('<option>SELECT A ROOM</option>');
    RoomsView.$select.append(DOMPurify.sanitize(html));
    RoomsView.$select.val(roomname);
  },

  roomChange: function(event) {
    Rooms.changeRoom(event.target.value);
  },

  addRoom: function(event) {
    // if not empty string, do this
    Rooms.changeRoom(RoomsView.$newRoomValue.val());
    RoomsView.$newRoomValue.val('');
  },
};

// use class to create room, then subclass for new room

