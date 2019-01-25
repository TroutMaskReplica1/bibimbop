var change = function(result) {
  for (i=0; i<=result; i++)
// function change(result) {
  if (result === 1) {
    return "Beep!"
  } else if (result === 2) {
    return "Boop!"
  } else if (result === 3) {
    return "I'm sorry, Dave. I'm afraid I can't do that."
  } else {
    return result
  }
}



$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    var input = $("input#input").val();
    var result = (parseInt(input))
    var results = change(result)
    $("#results").text(results);
  });
});
