(function ($): void {
  $('.portfolio__slider-lg').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.portfolio__slider-nav',
  });
  $('.portfolio__slider-nav').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.portfolio__slider-lg',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
})(jQuery);
