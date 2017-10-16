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

// Posts the text from input window to the feed
$("#add_text").click(function () {
  $('#feed').append($('#text_name').val());  
});