function rangeFinder(result) {
  var range = [];
  for (i=0; i<=result.length; i++) {
    range.push(i);
  }
    return range;
}

function change(result) {
  var array = [];
  for (i=0; i<result.length; i++) {
    var string = result[i].toString();
    var split = string.split("");
    if (split.includes("1")) {
      array.push("Beep!");
    } else if (split.includes("2")) {
      array.push("Boop!");
    } else if (split.includes("3")) {
      array.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
      array.push(alert("nope"));
    }
  }
  alert(array)
  return array;
}

$(document).ready(function() {
  $(".form").submit(function(event) {
    var input = $("input#input").val();
    var range = rangeFinder(input);
    var results = change(range);
    var output = (parseInt(results));
    $("#results").text(output);
    event.preventDefault();
  });
});
