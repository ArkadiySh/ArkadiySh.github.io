$(function() {

  $('#button').on('click', function() {

    var query = $('#query').val();

    $.ajax({
      url: 'http://api.riffsy.com/v1/search?tag=' + query + '&limit=5',

      success: function(data) {

        var ul = document.createElement('ul');

        $.each(data.results, function(i, res) {
            var item = document.createElement('li');
            item.innerHTML = '<a href="' + res.url + '" title="' + res.url + '" target="_blank">' + res.title + '</br>' + '<img class="image-output" src="' + res.url + '">' + "</a>";
            ul.appendChild(item);                   
        });

        $('#search-results').html(ul);

      },
    });    
  });   
});
