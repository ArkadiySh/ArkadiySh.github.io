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


    if ($( document ).width() < 1439) {

    var itemWidth = 256;
    var currentLeftValue = 0;
    var carouselItem = $('.slider__slide');

    var minOffset = - ((carouselItem.length - 7) * itemWidth);
    var maxOffset = 0;

    slideLeft1.on('click', function(e) {
      e.preventDefault();
      if (currentLeftValue != maxOffset) {
        currentLeftValue += 256;
        carousel1.animate({
        left: currentLeftValue + 'px'
        }, 700);
      }
    }); 

    slideRight1.on('click', function(e) {
      e.preventDefault();
      if (currentLeftValue != minOffset) {
        currentLeftValue -= 256;
        carousel1.animate({
          left: currentLeftValue + 'px'
        }, 700);
      }
    });





    slideLeft2.on('click', function(e) {
      e.preventDefault();
      if (currentLeftValue != maxOffset) {
        currentLeftValue += 256;
        carousel2.animate({
        left: currentLeftValue + 'px'
        }, 700);
      }
    }); 

    slideRight2.on('click', function(e) {
      e.preventDefault();
      if (currentLeftValue != minOffset) {
        currentLeftValue -= 256;
        carousel2.animate({
          left: currentLeftValue + 'px'
        }, 700);
      }
    });






    slideLeft3.on('click', function(e) {
      e.preventDefault();
      if (currentLeftValue != maxOffset) {
        currentLeftValue += 256;
        carousel3.animate({
        left: currentLeftValue + 'px'
        }, 700);
      }
    }); 

    slideRight3.on('click', function(e) {
      e.preventDefault();
      if (currentLeftValue != minOffset) {
        currentLeftValue -= 256;
        carousel3.animate({
          left: currentLeftValue + 'px'
        }, 700);
      }
    });

    } // END IF 768+




    if ($( document ).width() > 1439) {

    var itemWidth = 320;
    var currentLeftValue = 0;
    var carouselItem = $('.slider__slide');

    var minOffset = - ((carouselItem.length - 7) * itemWidth);
    var maxOffset = 0;

    slideLeft1.on('click', function(e) {
      e.preventDefault();
      if (currentLeftValue != maxOffset) {
        currentLeftValue += 320;
        carousel1.animate({
        left: currentLeftValue + 'px'
        }, 700);
      }
    }); 

    slideRight1.on('click', function(e) {
      e.preventDefault();
      if (currentLeftValue != minOffset) {
        currentLeftValue -= 320;
        carousel1.animate({
          left: currentLeftValue + 'px'
        }, 700);
      }
    });





    slideLeft2.on('click', function(e) {
      e.preventDefault();
      if (currentLeftValue != maxOffset) {
        currentLeftValue += 320;
        carousel2.animate({
        left: currentLeftValue + 'px'
        }, 700);
      }
    }); 

    slideRight2.on('click', function(e) {
      e.preventDefault();
      if (currentLeftValue != minOffset) {
        currentLeftValue -= 320;
        carousel2.animate({
          left: currentLeftValue + 'px'
        }, 700);
      }
    });






    slideLeft3.on('click', function(e) {
      e.preventDefault();
      if (currentLeftValue != maxOffset) {
        currentLeftValue += 320;
        carousel3.animate({
        left: currentLeftValue + 'px'
        }, 700);
      }
    }); 

    slideRight3.on('click', function(e) {
      e.preventDefault();
      if (currentLeftValue != minOffset) {
        currentLeftValue -= 320;
        carousel3.animate({
          left: currentLeftValue + 'px'
        }, 700);
      }
    });
  }
}
})(jQuery);