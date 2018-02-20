'use strict';

$(document).ready(function () {
  $('.modal').modal();

  var containerPosts = $('#posts');
  // Cargar imágen

  var inputTitleImg = $('#input_title_img');
  // let inputImg = $('#inputImg');

  $('#inputImg').on('change', handleFileSelect, false);

  var handleFileSelect = function handleFileSelect(evt) {
    // let selectedImg = evt.target.files;
    // console.log(selectedImg);    
    console.log('hola');
  };
});