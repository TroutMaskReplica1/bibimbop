var rangeFinder = function(result) {
  var range = [];
  for (i=0; i<=result; i++) {
    range.push(i);
  }
    return range;
}

var change = function(result) {
  for (i=0; i<=result; i++) {
    if (result === 1 && result !== 2 && result !== 3) {
      return "Beep!";
    } else if (result === 2 && result !== 3) {
      return "Boop!";
    } else if (result === 3) {
      return "I'm sorry, Dave. I'm afraid I can't do that.";
    } else {
      return result;
    }
  }
}



$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    var input = $("input#input").val();
    var range = rangeFinder(input);
    var number = (parseInt(range));
    var results = change(number);
    $("#results").text(results);
  });
});
