var $right = $('.slider__arrow--right');
var $left = $('.slider__arrow--left');
var $dot = $('.slider__dot');

var room = ['Для спальни', 'Для комнаты', 'Для кухни'];
var price = [20,30,40];

$dot.on('click', function(){
	$dot.removeClass('slider__dot--active');
	$(this).addClass('slider__dot--active');
})


function slider () {
	var i = 0;

	$right.on('click', function(){
		if (i < ($dot.length - 1)) {
			$('.main-wrapper').css('background-image', 'url(../../img/room-' + i + '.jpg)');
			$dot.removeClass('slider__dot--active');
			$dot[i+1].classList.add('slider__dot--active');
			$('.slider__room > p').html(room[i]);
			$('.slider__price > p > span').html(price[i]);
			i++;
		};
	})

	$left.on('click', function(){
		if (i > -1) {
			$('.main-wrapper').css('background-image', 'url(../../img/room-' + i + '.jpg)');
			$dot.removeClass('slider__dot--active');
			$dot[i-1].classList.add('slider__dot--active');
			$('.slider__room > p').html(room[i]);
			$('.slider__price > p > span').html(price[i]);
			i--;
		};
	})
}

slider();