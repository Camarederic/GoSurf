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
  $(".holder__slider, .shop__slider").slick({
    prevArrow:
      '<button type="button" class="slider-arrows slider-arrows__prev"><img src="icons/arrow-left.svg" alt=""/></button>',
    nextArrow:
      '<button type="button" class="slider-arrows slider-arrows__next"><img src="icons/arrow-right.svg" alt=""/></button>',
    infinite: true,
    fade: true,
  });

  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="icons/plus.svg" alt="logo"</div><div class="quantity-button quantity-down"><img src="icons/minus.svg" alt="logo"</div></div>'
  ).insertAfter(".quantity input");
  $(".quantity").each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  $(".quantity-button").on("click", function () {
    let summ =
      $(".nights").val() * $(".summa").data("nights") +
      ($(".guests").val() - 1) * $(".summa").data("guests");
    $(".summa").html("$" + summ);
  });

  let summ =
    $(".nights").val() * $(".summa").data("nights") +
    ($(".guests").val() - 1) * $(".summa").data("guests");
  $(".summa").html("$" + summ);

$(".surfboard-box__circle").on('click', function(){
  $(this).toggleClass("active");
})

});
