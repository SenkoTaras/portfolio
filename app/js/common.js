$(document).ready(function () {
  $("main").onepage_scroll({
    sectionContainer: "section",
    responsiveFallback: 600,
    loop: true
  });
});

$(document).ready(function () {
  $(".setsize").each(function () {
    $(this).height($(this).width());
  });
});
$(window).on('resize', function () {
  $(".setsize").each(function () {
    $(this).height($(this).width());
  });
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin: 0,
  nav:true,
  items: 1
});