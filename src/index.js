$(document).ready(() => {
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

  // Funcionalidad cargar imagen:
  let titleImg = $('.title-img-js');
  let sendButtonImg = $('.button-send-img-js');

  function handleFileSelect(evt) {
    console.log('hiciste change');
    
    // var files = evt.target.files; // FileList object

    // // files is a FileList of File objects. List some properties.
    // var output = [];
    // for (var i = 0, f; f = files[i]; i++) {
    //   output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
    //     f.size, ' bytes, last modified: ',
    //     f.lastModifiedDate.toLocaleDateString(), '</li>');
    // }
    // document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }

  document.getElementById('filesImg').addEventListener('change', handleFileSelect, false);

  $('#filesImg').on('change', handleFileSelect, false);
});