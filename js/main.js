$(document).ready(function() {
  $('.popovere').popover('enable');

  $(".port-item").click(function(event) {
    $('.collapse').collapse('hide');
    $(".port-item").removeClass('activate-pass');
    $(this).addClass('activate-pass')
  });

  $(".nav-paas").click(function(event) {
    $('.paas-item').collapse('hide');
    $(".port-item").removeClass('activate-pass');
    bloque = $(this).data("bloque");
    $("#bloque-" + bloque).addClass('activate-pass')
  });
  $(".iaas-t").click(function(event) {
    $('.iaas-i').collapse('hide');
    
  });
});
