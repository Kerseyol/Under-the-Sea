$(".menu-toggle").click(function () {
  $(".mobile-nav").toggleClass("mobile-nav--open", 500);
  $(this).toggleClass("open");
});
