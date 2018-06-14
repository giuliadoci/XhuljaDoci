$(document).ready(function(){
$('.contentlink').on('click', function(){
  var section = $(this).data('section');
  $('.contents').hide();
  $('#content_'+section).show();
  if (section !== "home"){
    $('.Banner').show();
  } else {
    $('.Banner').hide();
  }
});
});
