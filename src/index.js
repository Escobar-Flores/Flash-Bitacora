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
  let prueba = $('.title-multimedia-js');
  console.log(prueba);

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
              <audio src="${event.target.result}" controls></audio>         
          </div>
        </div>`; 
        
        buttonMultimedia.on('click', () => {
          posts.append(templateMultimedia);
        });
      };
      reader.readAsDataURL(myFile);
    }
  });
});