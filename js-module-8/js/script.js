$(function () {
  console.log('DOM is loaded');

  var $link1 = $('.wrapper__link--1');
  var $link2 = $('.wrapper__link--2');
  var $link3 = $('.wrapper__link--3');

  var $text1 = $('.wrapper__text--1');
  var $text2 = $('.wrapper__text--2');
  var $text3 = $('.wrapper__text--3');

  var $fn = $('#first_name');
  var $ln = $('#last_name');
  var $ad = $('#address');

  var $fnTt = $('.tooltips__tooltip--1');
  var $lnTt = $('.tooltips__tooltip--2');
  var $adTt = $('.tooltips__tooltip--3');
  var $ttBtn = $('.tooltips__button');



  function switcher(activeLink, activeText, hiddenLink1, hiddenLink2, hiddenText1, hiddenText2) {
    activeLink.addClass('wrapper__link--active');
    activeText.addClass('wrapper__text--active');

    hiddenText1.removeClass('wrapper__text--active');
    hiddenText2.removeClass('wrapper__text--active');

    hiddenLink1.removeClass('wrapper__link--active');
    hiddenLink2.removeClass('wrapper__link--active');
  }

  $link1.on('click', function(){
    switcher($link1, $text1, $link2, $link3, $text2, $text3)
  });

  $link2.on('click', function(){
    switcher($link2, $text2, $link1, $link3, $text1, $text3)
  });

  $link3.on('click', function(){
    switcher($link3, $text3, $link1, $link2, $text1, $text2)
  });



  $fn.hover(
    function(){
      $fnTt.addClass('tooltips__tooltip--on')}, 
    function(){
      $fnTt.removeClass('tooltips__tooltip--on');
    });

  $ln.hover(
    function(){
      $lnTt.addClass('tooltips__tooltip--on')}, 
    function(){
      $lnTt.removeClass('tooltips__tooltip--on');
    });


  $ad.hover(
    function(){
      $adTt.addClass('tooltips__tooltip--on')}, 
    function(){
      $adTt.removeClass('tooltips__tooltip--on');
  });
  
  $ttBtn.on('click', function(){
    $fnTt.addClass('tooltips__tooltip--on');
    $lnTt.addClass('tooltips__tooltip--on');
    $adTt.addClass('tooltips__tooltip--on');
  })

});