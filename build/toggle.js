$(document).ready(function() {
  $(".toggle").click(function() {
      $(".toggle__child").toggleClass("open");
      $(".nav").toggleClass("nav_is_active");
  });
});