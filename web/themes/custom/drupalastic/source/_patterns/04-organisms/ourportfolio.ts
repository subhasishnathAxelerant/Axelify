(function ($): void {
  $('.portfolio__slider-lg .portfolio__slider')
    .find('img')
    .addClass('portfolio__slider-lg__img');
  $('.portfolio__slider-lg .portfolio__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.portfolio__slider-nav .portfolio__slider',
  });
  $('.portfolio__slider-nav .portfolio__slider')
    .find('img')
    .addClass('portfolio__slider-nav__img');
  $('.portfolio__slider-nav .portfolio__slider').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.portfolio__slider-lg .portfolio__slider',
    arrows: false,
    dots: false,
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
