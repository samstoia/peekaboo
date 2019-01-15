$(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });
});
$(function() {
  $(".clickable2").click(function() {
    $("#initially-showing2").toggle();
    $("#initially-hidden2").toggle();
  });
});
$(function() {
  $(".clickable3").click(function() {
    $("#initially-showing3").toggle();
    $("#initially-hidden3").toggle();
  });
});
$(function() {
  $(".clickable4").click(function() {
    $("#initially-showing4").toggle();
    $("#initially-hidden4").toggle();
  });
});
$(function() {
  $(".clickable5").click(function() {
    $("#initially-showing5").fadeToggle();
    $("#initially-hidden5").fadeToggle();
  });
});
$(function() {
  $(".clickable6").click(function() {
    $("#initially-showing6").slideToggle();
    $("#initially-hidden6").slideToggle();
  });
});
