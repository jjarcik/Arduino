function refreshSwatch() {
  var r = $( "#red" ).slider( "value" )
  var g = $( "#green" ).slider( "value" )
  var b = $( "#blue" ).slider( "value" )
  
  $("#swatch").css("background", "rgb(" + r +", " + g + ", " +  b + ")")
  
  $.ajax({
   url: 'http://localhost:8080/color?r=' + r + '&g=' + g + '&b=' + b
 })
}

$(function() {
  $( "#red, #green, #blue" ).slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch
  });
  $( "#red" ).slider( "value", 255 );
  $( "#green" ).slider( "value", 140 );
  $( "#blue" ).slider( "value", 60 );
});