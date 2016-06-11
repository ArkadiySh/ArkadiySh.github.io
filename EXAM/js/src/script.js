$(function(){


  $('.slider__container').carousel({});




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








// ============= AJAX ================ 

  // var queriesArray = ['football', 'paris', 'sun', 'audio', 'dogs', 'programmer', 'sysadmin'];

  // var randomImg = Math.floor(Math.random() * queriesArray.length);

  $.ajax({

    type: 'GET',
    url:'http://api.pixplorer.co.uk/image?&amount=7&',
    dataType: 'json',

    success: function(data){

      var arrImageurl = _.map(data.images, 'imageurl');

      $('.ideas__link').each(function(i){
       
         $(this).css('backgroundImage', 'url('+arrImageurl[i]+')');       
      });

    },
    error: function(){
      // ошибка в IE8 IE9 не работает 
      console.log('Error: ', data);
    }
  });



  $('#idbtn').on('click', function(e){

    e.preventDefault();

    var query = $('.ideas__input').val(); 
    
    if(query){
      $('.ideas__input').val('');
    
      $.ajax({

        type: 'GET',
        url:'http://api.pixplorer.co.uk/image?word=' + query + '&amount=7',
        dataType: 'json',

        success: function(data){
          var imagesArray = _.map(data.images, 'imageurl');

          $('.ideas__link').each(function(i){     
            $(this).css('backgroundImage', 'url('+imagesArray[i]+')');
          });
        },

        error: function(){
          console.log('Error: ', data);
        }            
      });
    }
  });


  // ============= END OF === AJAX === END OF =================== 
});

