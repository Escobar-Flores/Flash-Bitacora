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

    if (tempTitle.length <= titleCharacters && tempMessage.length <= messageCharacters && tempTitle !== '' && messageCharacters !== '') {
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

  filesMultimedia.change(function (event) {
    var myFile = event.target.files[0];
    var typeOfContent = '';
    if (myFile.type.match('audio.*')) {
      var reader = new FileReader();
      reader.onload = function (event) {
        var titleMultimedia = $('.title-multimedia-js').val();
        var templateMultimedia = '\n        <div class="row">\n          <div class="col s10 offset-s1 z-depth-2 border">\n            <h2 class="center-align">' + titleMultimedia + '</h2>\n            <div class="flex-center">\n              <audio src="' + event.target.result + '" controls></audio> \n            </div>        \n          </div>\n        </div>';

        buttonMultimedia.on('click', function () {
          posts.append(templateMultimedia);
        });
      };
      reader.readAsDataURL(myFile);
    } else if (myFile.type.match('video.*')) {
      var _reader = new FileReader();
      _reader.onload = function (event) {
        var titleMultimedia = $('.title-multimedia-js').val();
        var templateMultimedia = '\n        <div class="row">\n          <div class="col s10 offset-s1 z-depth-2 border">\n            <h2 class="center-align">' + titleMultimedia + '</h2>\n            <div class="flex-center">\n              <video class="video" src="' + event.target.result + '" controls></video>\n            </div>        \n          </div>\n        </div>';

        buttonMultimedia.on('click', function () {
          posts.append(templateMultimedia);
        });
      };
      _reader.readAsDataURL(myFile);
    }
  });

  // Funcionalidad agregar evento: 
  $('.datepicker').pickadate({
    container: 'body',
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

  var sendButtonEvent = $('.button-send-event-js');

  sendButtonEvent.on('click', function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  });

  function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var urlMap = 'https://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + lon + '&zoom=18&size=400x400&markers=size:mid|color:red|label:A|' + lat + ',' + lon + '&key=AIzaSyDOjvTC2nBfK8CXtIwDX5xn_9UEGnqGOFs';
    var titleEvent = $('.title-event-js').val();
    var infoDate = $('.info-date-js').val();

    var templateEvent = '\n      <div class="row">\n        <div class="col s10 offset-s1 z-depth-2 border">\n          <h2 class="center-align">' + titleEvent + '</h2>\n          <p class="center-align">' + infoDate + '</p>\n          <figure class="flex-center">\n            <img class="responsive-img" src="' + urlMap + '" alt="">\n          </figure>            \n        </div>\n      </div>';
    posts.append(templateEvent);
  };

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert('User denied the request for Geolocation.');
        break;
      case error.POSITION_UNAVAILABLE:
        alert('Location information is unavailable.');
        break;
      case error.TIMEOUT:
        alert('The request to get user location timed out.');
        break;
      case error.UNKNOWN_ERROR:
        alert('An unknown error occurred.');
        break;
    }
  };
});