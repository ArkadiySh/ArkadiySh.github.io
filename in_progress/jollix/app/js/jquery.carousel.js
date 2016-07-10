(function($){

  $.fn.carousel = function(options) {

    var defaults = {
      
    }

    var settings = $.extend(defaults, options);

    var carousel1 = $('.carousel__list');
    var carousel2 = $('.carousel__list--base');

    var carouselItem = $('.carousel__item');

    

    var maxOffset = 0;
    var itemWidth = $('.carousel__item').outerWidth(true);
    var minOffset = - ((carouselItem.length - 3) * itemWidth);


    function slideLeft(carouselItem) {
      var currentLeftValue = carouselItem.position().left;
      // body...
      if (carouselItem.is(':animated')) {
        return false;
      } else if (currentLeftValue != maxOffset) {
        currentLeftValue += itemWidth;
        carouselItem.animate({
        left: currentLeftValue + 'px'
        }, 700);
      }
    };



    function slideRight(carouselItem) {
      // body...
      var currentLeftValue = carouselItem.position().left;
      if (carouselItem.is(':animated')) {
        return false;
      } else if (currentLeftValue != minOffset) {
        currentLeftValue -= itemWidth;
        carouselItem.animate({
          left: currentLeftValue + 'px'
        }, 700);
      }
    };


    $('.carousel__left').on('click', function(){
      slideLeft(carousel1);
    })

    $('.carousel__right').on('click', function(){
      slideRight(carousel1);
    }) 

    $('.carousel__left--base').on('click', function(){
      slideLeft(carousel2);
    })

    $('.carousel__right--base').on('click', function(){
      slideRight(carousel2);
    })

  }
})(jQuery);