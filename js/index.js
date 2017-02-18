$(document).ready(function(){
  
  $('form').on('keydown', '.submit-on-enter', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      $('.results').empty();
      var searchInput = $(this).val();
      $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchInput + '&origin=*&format=json', function(data) {
        
        for (var i = 0; i < data[1].length; i++) {
          $('.results').append('<p><a target="_blank" href="' + data[3][i] + '">' + data[1][i] + '</a><br>' + data[2][i]) + '</p>';
        }
        
  });
      
    }
    
  });
  
});