var MessageView = {

  renderFriend: _.template(`
    <div class="postDiv">
      <p class="username friend"><span><%- username %></span></p>
      <p class="text"><%- text %></p>
    </div>
  `),

  renderNonfriend: _.template(`
  <div class="postDiv">
    <p class="username"><span><%- username %></span></p>
    <p class="text"><%- text %></p>
  </div>
`)
};