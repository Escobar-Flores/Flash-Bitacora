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

  // Funcionalidad Multimedia : 

  var filesMultimedia = $('#filesMultimedia');
  var buttonMultimedia = $('.button-send-multimedia-js');
  var prueba = $('.title-multimedia-js');
  console.log(prueba);

  filesMultimedia.change(function (event) {

    var myFile = event.target.files[0];
    var typeOfContent = '';
    if (myFile.type.match('audio.*')) {
      var reader = new FileReader();
      reader.onload = function (event) {
        var titleMultimedia = $('.title-multimedia-js').val();
        var templateMultimedia = '\n        <div class="row">\n          <div class="col s10 offset-s1 z-depth-2 border">\n            <h2 class="center-align">' + titleMultimedia + '</h2>\n              <audio src="' + event.target.result + '" controls></audio>         \n          </div>\n        </div>';

        buttonMultimedia.on('click', function () {

          console.log('click!!!');
          posts.append(templateMultimedia);
        });
      };
      reader.readAsDataURL(myFile);
    }
  });
});