// createdby affu satouru
$('.section__4-carousel').slick({
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000,
nextArrow: false,
prevArrow: false,
focusOnSelect: true,
centerMode: true,
});

$(".section__4-button-prev").on("click", function () {
    $(".section__4-carousel").slick("slickPrev");
  });

  $(".section__4-button-next").on("click", function () {
    $(".section__4-carousel").slick("slickNext");
  });