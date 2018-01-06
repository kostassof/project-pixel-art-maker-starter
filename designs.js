// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  $('#pixel_canvas').empty();
  var rows = $('#input_height').val();
  var columns = $('#input_width').val();

  for (var i = 0; i < rows; i++) {
    $("#pixel_canvas").append("<tr class=" + i + "></tr>");
    for (var j = 0; j < columns; j++) {
      $("."+ i +"").append("<td></td>")
    };
  };
}

$('#button').on("click", function() {
  event.preventDefault();
  makeGrid();
});

$('#pixel_canvas').on('click', 'td', function() {
  var color = $('input[type="color"]').val();
  $(this).css("background-color", color);
});

