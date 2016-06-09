$(function(){

  var container = document.querySelector('#container');
  var msnry = new Masonry( container, {
    // Настройки
    columnWidth: '.ideas__link',
    gutter: 15,
    itemSelector: '.ideas__link'
  });


  $('carousel__wrapper').carousel({
      
  });

});