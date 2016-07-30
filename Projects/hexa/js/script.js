var $right = $('.slider__arrow--right');
var $left = $('.slider__arrow--left');
var $dot = $('.slider__dot');

var room = ['Для зала', 'Для комнаты', 'Для кухни', 'Для спальни'];
var price = [50, 20,30,40];


var i = 0;
$right.on('click', function(){
	if (i < ($dot.length - 1)) {
		i++;
		$('.main-wrapper').css('background-image', 'url(../img/room-' + i + '.jpg)');
		$dot.removeClass('slider__dot--active');
		$dot[i].classList.add('slider__dot--active');
		$('.slider__room > p').html(room[i]);
		$('.slider__price > p > span').html(price[i]);
	};
})

$left.on('click', function(){
	if (i > 0) {
		i--;
		$('.main-wrapper').css('background-image', 'url(../img/room-' + i + '.jpg)');
		$dot.removeClass('slider__dot--active');
		$dot[i].classList.add('slider__dot--active');
		$('.slider__room > p').html(room[i]);
		$('.slider__price > p > span').html(price[i]);
	};
})


$dot.on('click', function () {
	// body...
	$dot.removeClass('slider__dot--active');
	$(this).addClass('slider__dot--active');
	i = $(this).index();
	$('.slider__room > p').html(room[i]);
	$('.slider__price > p > span').html(price[i]);
	$('.main-wrapper').css('background-image', 'url(../img/room-' + i + '.jpg)');
})