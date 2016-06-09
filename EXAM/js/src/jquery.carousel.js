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

    var itemWidth = 320;
    var currentLeftValue = 0;
    var carouselItem = $('.slider__slide');

    var minOffset = - ((carouselItem.length - 7) * itemWidth);
    var maxOffset = 0;

    slideLeft1.click(function(e) {
      e.preventDefault();
      if (currentLeftValue != maxOffset) {
        currentLeftValue += 320;
        carousel1.animate({
        left: currentLeftValue + 'px'
        }, 700);
      }
    }); 

    slideRight1.click(function(e) {
      e.preventDefault();
      if (currentLeftValue != minOffset) {
        currentLeftValue -= 320;
        carousel1.animate({
          left: currentLeftValue + 'px'
        }, 700);
      }
    });





    slideLeft2.click(function(e) {
      e.preventDefault();
      if (currentLeftValue != maxOffset) {
        currentLeftValue += 320;
        carousel2.animate({
        left: currentLeftValue + 'px'
        }, 700);
      }
    }); 

    slideRight2.click(function(e) {
      e.preventDefault();
      if (currentLeftValue != minOffset) {
        currentLeftValue -= 320;
        carousel2.animate({
          left: currentLeftValue + 'px'
        }, 700);
      }
    });






    slideLeft3.click(function(e) {
      e.preventDefault();
      if (currentLeftValue != maxOffset) {
        currentLeftValue += 320;
        carousel3.animate({
        left: currentLeftValue + 'px'
        }, 700);
      }
    }); 

    slideRight3.click(function(e) {
      e.preventDefault();
      if (currentLeftValue != minOffset) {
        currentLeftValue -= 320;
        carousel3.animate({
          left: currentLeftValue + 'px'
        }, 700);
      }
    });
  }
})(jQuery);