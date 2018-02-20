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

    if (tempTitle.length <= titleCharacters && tempMessage.length <= messageCharacters && tempTitle !== '' && messageCharacters !== '') {
      let template = `<div class="row">
      <div class="col s10  offset-s1 z-depth-2 border ">
      <h2 class="center-align">${tempTitle}</h2>
      <p class="center-align">${tempMessage}</p>
      </div>
    </div>`;
      posts.append(template);
      titleMessage.val('');
      message.val('');
    }
  });

  // Funcionalidad cargar imagen:  
  let sendButtonImg = $('.button-send-img-js');

  $('#filesImg').change((event) => {
    let files = event.target.files; // FileList object
    let myFile = files[0];
    
    if (!myFile.type.match('image.*')) {
      alert('No es una imagen, seleccione una imagen');
      console.log('no es imagen');    
    } else {
      let reader = new FileReader();

      reader.onload = (event) => {
        let titleImg = $('.title-img-js').val();
        let templateImg = `
        <div class="row">
          <div class="col s10 offset-s1 z-depth-2 border">
            <h2 class="center-align">${titleImg}</h2>
            <figure class="flex-center">
              <img class="responsive-img" src="${event.target.result}" alt="">
            </figure>            
          </div>
        </div>`; 
        
        sendButtonImg.on('click', () => {
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

  let filesMultimedia = $('#filesMultimedia');
  let buttonMultimedia = $('.button-send-multimedia-js');

  filesMultimedia.change((event) => {
    let myFile = event.target.files[0];
    let typeOfContent = '';
    if (myFile.type.match('audio.*')) {
      let reader = new FileReader();
      reader.onload = (event) => {
        let titleMultimedia = $('.title-multimedia-js').val();
        let templateMultimedia = `
        <div class="row">
          <div class="col s10 offset-s1 z-depth-2 border">
            <h2 class="center-align">${titleMultimedia}</h2>
            <div class="flex-center">
              <audio src="${event.target.result}" controls></audio> 
            </div>        
          </div>
        </div>`; 
        
        buttonMultimedia.on('click', () => {
          posts.append(templateMultimedia);
          $('.title-multimedia-js').val('');
          $('.delete-multimedia-js').val('');
          templateMultimedia = '';
        });
      };
      reader.readAsDataURL(myFile);
    } else if (myFile.type.match('video.*')) {
      let reader = new FileReader();
      reader.onload = (event) => {
        let titleMultimedia = $('.title-multimedia-js').val();
        let templateMultimedia = `
        <div class="row">
          <div class="col s10 offset-s1 z-depth-2 border">
          <div class="row">
          <div class="col s-12">
            <h2 class="center-align">${titleMultimedia}</h2>
            </div> 
            </div> 
            <div class="row flex-center">
            <div class="col s-12">
              <video class="video responsive-video" src="${event.target.result}" controls></video>
              </div>
            </div>        
          </div>
        </div>`; 
        
        buttonMultimedia.on('click', () => {
          posts.append(templateMultimedia);
          $('.title-multimedia-js').val('');
          $('.delete-multimedia-js').val('');
          templateMultimedia = '';
        });
      };
      reader.readAsDataURL(myFile);
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
  
  let sendButtonEvent = $('.button-send-event-js');
  
  sendButtonEvent.on('click', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  });
  
  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let urlMap = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=18&size=400x400&markers=size:mid|color:red|label:A|${lat},${lon}&key=AIzaSyDOjvTC2nBfK8CXtIwDX5xn_9UEGnqGOFs`;
    let titleEvent = $('.title-event-js').val();
    let infoDate = $('.info-date-js').val();
  
    let templateEvent = `
      <div class="row">
        <div class="col s10 offset-s1 z-depth-2 border">
          <h2 class="center-align">${titleEvent}</h2>
          <p class="center-align">${infoDate}</p>
          <figure class="flex-center">
            <img class="responsive-img" src="${urlMap}" alt="">
          </figure>            
        </div>
      </div>`; 
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