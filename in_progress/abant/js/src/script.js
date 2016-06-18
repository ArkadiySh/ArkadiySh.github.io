$(document).ready(function(){
  var menu = $('.device-menu__menu');

  $('.menu__button').click(

    function() {
      $(this).find(menu).slideToggle('slow');
    }
  );






  $('.device-menu__item').hover(
    function(){
      var n = $(this).find('.submenu__item').length;

      if (n > 0) {
        $(this).height((n + 1)  * 35);
      } else ( $(this).height(35) );

      $(this).find('.submenu').slideDown('fast');
    },

    function(){
      $(this).height(35);
      $(this).find('.submenu').slideUp('fast');

    }
  )

})