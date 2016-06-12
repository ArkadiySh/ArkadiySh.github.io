$(function(){

  $('.slider__container').carousel({});

  

// ============= AJAX ================ 

  var queriesArray = ['football', 'paris', 'sun', 'audio', 'dogs', 'programmer', 'sysadmin'];

  var randomImg = Math.floor(Math.random() * queriesArray.length);

  $.ajax({

    type: 'GET',
    url:'https://pixabay.com/api/?key=2733658-33c3d7fe3430c377eea957686&q=' +queriesArray[randomImg]+'&per_page=7',
    dataType: 'jsonp',

    success: function(data){
      $.each(data.hits, function (i) {        
        $('.ideas__link').each(function(i){
          $(this).css('backgroundImage', 'url(' +data.hits[i].webformatURL+ ')');          
        });


        $('.ideas__name').each(function(i){
          $(this).text(data.hits[i].tags)
        });
      });
    },

    error: function(){
      console.log('Error: ', data);
    }
  });



  $('#idbtn').on('click', function(event){

    event.preventDefault();

    var query = $('.ideas__input').val(); 
    
    if(query){
      $('.ideas__input').val('');
    
      $.ajax({

        type: 'GET',
        url:'https://pixabay.com/api/?key=2733658-33c3d7fe3430c377eea957686&q=' +query+ '&per_page=7',
        dataType: 'jsonp',

        success: function(data){
          $.each(data.hits, function (i) { 

            $('.ideas__link').each(function(i){
              $(this).css('backgroundImage', 'url(' +data.hits[i].webformatURL+ ')');          
            });

            $('.ideas__name').each(function(i){
              $(this).text(data.hits[i].tags)
            });

          });
        },

        error: function(){
          console.log('Error: ', data);
        }
      });
    }
  });

  // ============= END OF === AJAX === END OF =================== 







  // ============= MASONRY ===============

  if ($( document ).width() > 1439) {

    var container = document.querySelector('#container');
    var msnry = new Masonry( container, {
      // Настройки

      columnWidth: '.ideas__link',
      gutter: 20,
      itemSelector: '.ideas__link'
    });
  };


  if ($( document ).width() < 1439) {

    var container = document.querySelector('#container');
    var msnry = new Masonry( container, {
      // Настройки

      columnWidth: '.ideas__link',
      gutter: 16,
      itemSelector: '.ideas__link'
    });
  };

  // ============= END OF === MASONRY === END OF ==================


});



