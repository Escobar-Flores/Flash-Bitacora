$(document).ready(function() {
  $('.modal').modal();

  // funcionalidad mensaje nuevo:
  const posts = $('#posts');
  let titleMessage = $('.title-message-js');
  let message = $('.message-js');
  let sendButton = $('.button-send-js');
  const titleCharacters = 10;
  const messageCharacters = 120;
  sendButton.on('click', (event) => {
    let tempTitle = titleMessage.val();
    let tempMessage = message.val();

    if (tempTitle.length <= titleCharacters && tempMessage.length <= messageCharacters) {
      let template = `<div class="row">
      <div class="col s10  offset-s1 z-depth-2 border ">
      <h1 class="center-align">${tempTitle}</h1>
      <p class="center-align">${tempMessage}</p>
      </div>
    </div>`;
      posts.append(template);
      titleMessage.val('');
      message.val('');
    }
  });
});
