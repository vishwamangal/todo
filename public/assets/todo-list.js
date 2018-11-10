$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var todo = {item: item.val()};
      
      //jquerry
      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //not good way.
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //not good way.
          location.reload();
        }
      });
  });

});
