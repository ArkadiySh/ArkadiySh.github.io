'use strict';

$(function() {


  var preQuestions = [

    {
      question: 'Question 1',
      answer1: 'Answer 1',
      answer2: 'Answer 2',
      answer3: 'Answer 3'
    },

    {
      question: 'Question 2',
      answer1: 'Answer 1',
      answer2: 'Answer 2',
      answer3: 'Answer 3'
    },

    {
      question: 'Question 3',
      answer1: 'Answer 1',
      answer2: 'Answer 2',
      answer3: 'Answer 3'
    }
  ];


  localStorage.setItem('preQuestions', JSON.stringify(preQuestions));

  var strQuestions = localStorage.getItem('preQuestions');

  var questions = JSON.parse(strQuestions);

  var test = $('#test').html();
  var testContent = tmpl(test, {
    data: questions
  });

  $('.questions__block').append(testContent);




  // Modal block starts here

  var $modal;
  var $overlay;

  function showModal(){

    $modal = $('<div class="modal"><p class="results"></p></div>');
    $overlay = $('<div class="overlay"></div>');
    
    $overlay.on('click', hideModal);

    $('body').append($overlay)
    $('body').append($modal)

  };

  function hideModal(){
    $modal.remove();
    $overlay.remove();
  };

  $('.test__button').on('click', showModal);


  $('.test__button').on('click', function(){

    var $result;

    $('input').each(function() {

      if ($(this).prop('checked')) {

        if ($(this).attr('value') == 'correct') {
          $result = true;
        } else { 
          $result = false
        }
      }
    });

    if ($result) {
      $('.results').html('Everything is correct');
      $('input').removeAttr('checked');

    } else {
      $('.results').html('Wrong answer');
      $('input').removeAttr('checked');
    }
  });

});



// questions

// 1. Как сделать проверку по всем вопросам (сейчас даже при одном выбранном правильном варианте фиксируется правильный результат)?
// 2. Можно ли задать атрибут через шаблонизатор, а не вручную?