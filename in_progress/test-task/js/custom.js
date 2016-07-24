$(document).ready(function(){

	$('.slider').slick({
		dots: true,
		customPaging: function(slider, i) {
			return '<span class="dot"></span>';
		}
	});


	$('.submenu').parent().addClass('dropdown');


	$('.dropdown').hover(
		function(e) {
			$(this).children('.submenu').stop().slideToggle('fast');
		}
	);
});


