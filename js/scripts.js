function rangeFinder(result) {
  var range = [];
  for (i=0; i<=result; i++) {
    range.push(i);
  }
    return range;
}

function change(result) {
  var array = [];
  for (i=0; i<result.length; i++) {
    var string = result[i].toString();
    var split = string.split("");
    if (split.includes("3")) {
    array.push(" I'm sorry, Dave. I'm afraid I can't do that. ");
    } else if (split.includes("2")) {
      array.push(" Boop! ");
    } else if (split.includes("1")) {
      array.push(" Beep! ");
    } else {
      array.push(" " + result[i] + " ");
    }
  }
  return array;
}

$(document).ready(function() {
  $(".form").submit(function(event) {
    var input = $("input#input").val();
    var number = parseInt(input);
    var range = rangeFinder(number);
    var results = change(range);
    $("#results").show();
    $("#results").text(results);
    event.preventDefault();
  });
});
