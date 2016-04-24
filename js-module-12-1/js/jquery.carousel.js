(function($){

  $.fn.carousel = function(options) {

    var defaults = {
      
    }

    var settings = $.extend(defaults, options);

    var slideLeft = $('.carousel__arrow--left');
    var slideRight = $('.carousel__arrow--right');
    var carousel = $('.carousel__list');

    var itemWidth = 245;
    var currentLeftValue = 0;
    var carouselItem = $('.carousel__element');

    var minOffset = - ((carouselItem.length - 4) * itemWidth);
    var maxOffset = 0;

    slideLeft.click(function() {
      if (currentLeftValue != maxOffset) {
        currentLeftValue += 245;
        carousel.animate({
        left: currentLeftValue + 'px'
        }, 500);
      }
    }); 

    slideRight.click(function() {
      if (currentLeftValue != minOffset) {
        currentLeftValue -= 245;
        carousel.animate({
          left: currentLeftValue + 'px'
        }, 500);
      }
    });
  }
})(jQuery);