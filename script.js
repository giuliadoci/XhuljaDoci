$(document).ready(function(){
$('.contentlink').on('click', function(){
  var section = $(this).data('section');
  $('.Banner').hide();
  $('.contents').hide();
  $('.loader-container').show();
  setTimeout(function(){
    $('#content_'+section).show();
    $('.loader-container').hide();
    if (section !== "home"){
      $('.Banner').show();
    } else {
      $('.Banner').hide();
    }
  }, section !== "home" ? 1500 : 0);
});
});

  /*il caricamento è ovviamente simulato per permettere di
  vedere lo spinner
ヽ(´▽`)/
  */
