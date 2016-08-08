$( document ).ready(function() {

	function animateSlider () {
		var slider = $('.slider__container');
		var slide = $('.slider__slide');

		var maxOffset = 0;
		var itemWidth = slide.outerWidth(true);
		var minOffset = - ((slide.length - 1) * itemWidth);

		var $right = $('.slider__arrow--right');
		var $left = $('.slider__arrow--left');
		var $dot = $('.slider__dot');

		var i = 0;

		$right.on('click', function(){
			
			var currentLeftValue = slider.position().left;

			if (slider.is(':animated')) {
				return false;
			} else if (currentLeftValue != minOffset) {
				currentLeftValue -= itemWidth;

				slider.animate({
					left: currentLeftValue + 'px'
				}, 700);

				if (i < ($dot.length - 1)) {
					i++;
					$dot.removeClass('slider__dot--active');
					$dot[i].classList.add('slider__dot--active');
				};
			}
		})

		$left.on('click', function(){		
			var currentLeftValue = slider.position().left;

			if (slider.is(':animated')) {
				return false;
			} else if (currentLeftValue != maxOffset) {
				currentLeftValue += itemWidth;

				slider.animate({
					left: currentLeftValue + 'px'
				}, 700);

				if (i > 0) {
					i--;
					$dot.removeClass('slider__dot--active');
					$dot[i].classList.add('slider__dot--active');
				};
			}
		})

		$dot.on('click', function () {
			var currentLeftValue = slider.position().left;

			if (slider.is(':animated')) {
				return false;
			}

			$dot.removeClass('slider__dot--active');
			$(this).addClass('slider__dot--active');
			i = $(this).index();

			currentLeftValue -= ( (itemWidth * i) + currentLeftValue);
			slider.animate({
				left: currentLeftValue + 'px'
			}, 700);
		})

	}



	function switchBlog() {
		var $dot = $('.blog__dot');
		var $blog = $('.blog');
		// body...
		$dot.on('click', function () {

			$dot.removeClass('blog__dot--active');
			$(this).addClass('blog__dot--active');
			i = $(this).index();

			$blog.removeClass('blog--active');
			$blog[i].classList.add('blog--active');
		})
	}


	function dropdown() {
		$('.dropdown').hover(
			function(e) {
				$(this).children('.submenu').stop().slideToggle(300);
				$(this).children('.device-menu__button').toggleClass('device-menu__button--hidden');
			}
		);
	}


	animateSlider();
	switchBlog();
	dropdown();

	console.log( 'everything seems ok!' );
});
