$(document).ready(() => {
  $('.modal').modal();

  const containerPosts = $('#posts');
  // Cargar imágen
  
  let inputTitleImg = $('#input_title_img');
  // let inputImg = $('#inputImg');

  $('#inputImg').on('change', handleFileSelect, false);

  let handleFileSelect = (evt) => {
    // let selectedImg = evt.target.files;
    // console.log(selectedImg);    
    console.log('hola');    
  };
});