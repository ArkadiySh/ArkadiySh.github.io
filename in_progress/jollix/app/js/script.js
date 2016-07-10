$(document).ready(function(){
  $('.carousel').carousel({});


  if ($( document ).width() < 1037) {

  	// dropdown to choose a service
	$('.autoexcange__service').click(
	  function(e) {
		e.preventDefault();
		$(this).find('.autoexcange__menu').slideToggle(700);
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
		$(this).next('.submenu').slideToggle(700);
		$(this).parent('.header__block').toggleClass('header__block--active');
	  }
	);
  };



})