$(function () {
  $(".header__slider").slick({
    prevArrow:
      '<button type="button" class="slider-arrows slider-arrows__prev"><img src="icons/arrow-left.svg" alt=""/></button>',
    nextArrow:
      '<button type="button" class="slider-arrows slider-arrows__next"><img src="icons/arrow-right.svg" alt=""/></button>',
    infinite: true,
    fade: true,
    asNavFor: ".slider-dots",
  });
  $(".slider-dotshead").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
  });
  $(".surf-slider").slick({
    prevArrow:
      '<button type="button" class="slider-arrows slider-arrows__prev"><img src="icons/arrow-left.svg" alt=""/></button>',
    nextArrow:
      '<button type="button" class="slider-arrows slider-arrows__next"><img src="icons/arrow-right.svg" alt=""/></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-map",
  });
  $(".slider-map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".surf-slider",
    focusOnSelect: true,
  });
});
