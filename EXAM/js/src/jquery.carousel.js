(function($){

  $.fn.carousel = function(options) {

    var defaults = {
      
    }

    var settings = $.extend(defaults, options);

    var slideLeft1 = $('.howitworks__left--1');
    var slideRight1 = $('.howitworks__right--1');
    var carousel1 = $('.carousel__list--1');

    var slideLeft2 = $('.howitworks__left--2');
    var slideRight2 = $('.howitworks__right--2');
    var carousel2 = $('.carousel__list--2');

    var slideLeft3 = $('.howitworks__left--3');
    var slideRight3 = $('.howitworks__right--3');
    var carousel3 = $('.carousel__list--3');

    var carouselItem = $('.slider__slide');

    var maxOffset = 0;



    var itemWidth = ($('.howitworks__step').outerWidth(true) + 10);
    var minOffset = - ((carouselItem.length - 7) * itemWidth);


    function slideLeft(carouselItem) {
      var currentLeftValue = carouselItem.position().left;
      // body...
      if (currentLeftValue != maxOffset) {
        currentLeftValue += itemWidth;
        carouselItem.animate({
        left: currentLeftValue + 'px'
        }, 700);
      }
    };



    function slideRight(carouselItem) {
      // body...
      var currentLeftValue = carouselItem.position().left;
      if (currentLeftValue != minOffset) {
        currentLeftValue -= itemWidth;
        carouselItem.animate({
          left: currentLeftValue + 'px'
        }, 700);
      }
    }


    $('.howitworks__left--1').on('click', function(){
      slideLeft(carousel1);
    })

    $('.howitworks__right--1').on('click', function(){
      slideRight(carousel1);
    })

    $('.howitworks__left--2').on('click', function(){
      slideLeft(carousel2);
    })

    $('.howitworks__right--2').on('click', function(){
      slideRight(carousel2);
    })

    $('.howitworks__left--3').on('click', function(){
      slideLeft(carousel3);
    })

    $('.howitworks__right--3').on('click', function(){
      slideRight(carousel3);
    })


  }
})(jQuery);