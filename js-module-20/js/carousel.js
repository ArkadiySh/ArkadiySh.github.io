$(function(){

  var slides = [
      
    {src: 'img/slider.jpg'},
    {src: 'img/slider.jpg'},
    {src: 'img/slider.jpg'},
      
  ];

  $('.jR3DCarouselGallery').jR3DCarousel({
    width: 1160,         
    height: 470,
    slides: slides,
    slideLayout: 'fill',
    autoplay: null,
    animation: 'fade',
    navigation: 'squares'
  });
});