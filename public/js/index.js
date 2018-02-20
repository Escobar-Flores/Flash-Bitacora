'use strict';

$(document).ready(function () {
  $('.modal').modal();

  // funcionalidad mensaje nuevo:
  var posts = $('#posts');
  var titleMessage = $('.title-message-js');
  var message = $('.message-js');
  var sendButton = $('.button-send-js');
  var titleCharacters = 10;
  var messageCharacters = 120;
  sendButton.on('click', function (event) {
    var tempTitle = titleMessage.val();
    var tempMessage = message.val();

    if (tempTitle.length <= titleCharacters && tempMessage.length <= messageCharacters) {
      var template = '<div class="row">\n      <div class="col s10  offset-s1 z-depth-2 border ">\n      <h1 class="center-align">' + tempTitle + '</h1>\n      <p class="center-align">' + tempMessage + '</p>\n      </div>\n    </div>';
      posts.append(template);
      titleMessage.val('');
      message.val('');
    }
  });

  // Funcionalidad cargar imagen:
  var titleImg = $('.title-img-js');
  var sendButtonImg = $('.button-send-img-js');

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