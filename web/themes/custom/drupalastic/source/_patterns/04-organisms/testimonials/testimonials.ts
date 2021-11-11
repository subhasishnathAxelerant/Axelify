(function ($): void {
  $('.testimonials__slider').slick({
    slidesToShow: 1,
    arrows: true,
    fade: true,
    // autoplay: true,
    infinite: true,
    speed: 200,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });
})(jQuery);
