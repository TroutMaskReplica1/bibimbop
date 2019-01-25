
$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    var result = $("input#input").val();
    $("#results").text(result);
  });
});
