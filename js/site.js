// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function myFunction() {
  var x = document.getElementById("intro");
  x.style.fontSize = "15px"; 
  x.style.color = "#334d4d"; 
}
