$(document).ready(function () {
  $(".section__2-carousel").slick({
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    slidesToShow: 1,
    focusOnSelect: true,
    centerMode: true,
    nextArrow: false,
    prevArrow: false,
  });
});

$(".section__2-button-prev").on("click", function () {
  $(".section__2-carousel").slick("slickPrev");
});

$(".section__2-button-next").on("click", function () {
  $(".section__2-carousel").slick("slickNext");
});

$(document).ready(function () {
  $(".section__2-list-store").slick({
    inifinite: true,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 6,
  });
});
