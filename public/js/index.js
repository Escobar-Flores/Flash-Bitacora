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
      var template = '<div class="row">\n      <div class="col s10  offset-s1 z-depth-2 border ">\n      <h2 class="center-align">' + tempTitle + '</h2>\n      <p class="center-align">' + tempMessage + '</p>\n      </div>\n    </div>';
      posts.append(template);
      titleMessage.val('');
      message.val('');
    }
  });

  // Funcionalidad cargar imagen:  
  var sendButtonImg = $('.button-send-img-js');

  $('#filesImg').change(function (event) {
    var files = event.target.files; // FileList object
    var myFile = files[0];

    if (!myFile.type.match('image.*')) {
      alert('No es una imagen, seleccione una imagen');
      console.log('no es imagen');
    } else {
      var reader = new FileReader();

      reader.onload = function (event) {
        var titleImg = $('.title-img-js').val();
        var templateImg = '\n        <div class="row">\n          <div class="col s10 offset-s1 z-depth-2 border">\n            <h2 class="center-align">' + titleImg + '</h2>\n            <figure class="flex-center">\n              <img class="responsive-img" src="' + event.target.result + '" alt="">\n            </figure>            \n          </div>\n        </div>';

        sendButtonImg.on('click', function () {
          posts.append(templateImg);
          $('.title-img-js').val('');
          $('.delete-value-js').val('');
          templateImg = '';
        });
      };

      reader.readAsDataURL(myFile);
    };
  });
});