// Opens the dialog window when Tweet button is clicked
// Closes the window when Tweet button is clicked fron the dialog window
(function() {  
  var dialog = document.getElementById('window');  
  document.getElementById('show').onclick = function() {  
    dialog.show();
    };
  document.getElementById('add_text').onclick = function() {  
    dialog.close();  
    };
})();

// Storing input values into list
const inputList = [];
$("#add_text").click(function () {
  const value = ($('#text_name').val());
    $('#feed').append("<p>" + value + "</p>");
});


