$(document).ready(function(){
	
	$('.carousel').carousel({});


	if ($('body').width() < 1038) {

		// dropdown to choose a service
		$('.autoexcange__service').click(
		  function(e) {
			e.preventDefault();
			$(this).find('.autoexcange__menu').slideToggle(500);
			$(this).parent('.container').toggleClass('hovered');
		  }
		);


		// top-menu dropdown
		$('.header__menubtn').click(
		  function(e) {
			e.preventDefault();
			$('.header__menu').slideDown(0);
		  }
		);

		// close top-menu
		$('.header__back').click(
		  function(e) {
			e.preventDefault();
			$('.header__menu').slideUp(0);
		  }
		);

		// submenu in top-menu
		$('.header__item').click(
		  function(e) {
			e.preventDefault();
			$(this).next('.submenu').slideToggle(500);
			$(this).parent('.header__block').toggleClass('header__block--active');
		  }
		);
	  };


	if ($('body').width() > 1037) {

	  	$('.header__login').hover(
		  function() {
			$(this).find('.dropdown').slideToggle(500);
		  }
		);


		// dropdown to choose a service
		$('.autoexcange__service').click(
		  function(e) {
			e.preventDefault();
			$(this).find('.autoexcange__menu').slideToggle(500);
			$(this).parent('.container').toggleClass('hovered');
		  }
		);
	};
})