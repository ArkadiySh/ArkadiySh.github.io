'use strict';

$(function() {


  var preQuestions = [

    {
      question: 'Question 1',
      answers: ['Answer 1', 'Answer 2', 'Answer 3'],
      correctAnswer: 3
    },

    {
      question: 'Question 2',
      answers: ['Answer 1', 'Answer 2', 'Answer 3'],
      correctAnswer: 1
    },

    {
      question: 'Question 3',
      answers: ['Answer 1', 'Answer 2', 'Answer 3'],
      correctAnswer: 3
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


  $(".test__button").on("click", function() {
    var $result = true;

    var index = questions.map(function(el, i) {
      return el.correctAnswer - 1 + i * 3
    });

    $("input").each(function(i) {
      if (~index.indexOf(i) && !this.checked || !~index.indexOf(i) && this.checked) {
        $result = false
      }
    });

    if ($result) {

      $(".results").html("Everything is correct");
      $("input").removeAttr("checked");

    } else {

        $(".results").html("Wrong answer");
        $("input").removeAttr("checked");

      }

    });
});