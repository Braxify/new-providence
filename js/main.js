$(document).ready(function() {
  $(".phone-screens__slider").slick({
    infinite: true,
    dots: false,
    arrows: false,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true
  });
  $(".reviews__slider").slick({
    prevArrow:
      '<a href="#" class="slider__arrows slider__arrows-left"><img src="img/customers-arrow.svg" style="transform:rotate(180deg);" alt=""></a>',
    nextArrow:
      '<a href="#" class="slider__arrows slider__arrows-right"><img src="img/customers-arrow.svg" alt=""></a>',
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      // {
      //   breakpoint: 768,
      //   settings: {
      //     arrows: false,
      //     centerMode: true,
      //     centerPadding: "40px",
      //     slidesToShow: 3
      //   }
      // },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });

  $(".plan-cards__item").on("click", function(e) {
    e.preventDefault();
    $(".plan-cards__item").removeClass("plan-cards__item--active");
    $(e.currentTarget)
      .closest(".plan-cards__item")
      .addClass("plan-cards__item--active");
  });

  $(".person__type-item").on("click", function(e) {
    e.preventDefault();
    $(".person__type-item").removeClass("person__type-item--active");
    e.target.classList.add("person__type-item--active");
  });

  $(".hamburger-menu").on("click", function(e) {
    e.preventDefault();
    $(".menu").toggleClass("active");
  });

  $(".close-menu").on("click", function(e) {
    e.preventDefault();
    $(".menu").removeClass("active");
  });
});
