var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', '.username', MessagesView.toggleFriend);
  },

  render: function(messages, friends = {}) {
    MessagesView.$chats.empty();
    messages.forEach(m => {
      if (friends[m.username]) {
        MessagesView.$chats.append(DOMPurify.sanitize(MessageView.renderFriend(m)));
      } else {
        MessagesView.$chats.append(DOMPurify.sanitize(MessageView.renderNonfriend(m)));
      }
    });
  },

  toggleFriend: function(event) {
    Messages.toggleFriend($(event.target).text());
  }

};