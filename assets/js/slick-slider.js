$(window).ready(function () {
  // SLIDER CUSTOMER
  $(".slider-customer").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
    prevArrow: "<button type='button' class='!hidden slick-prev pull-left xl:!block'><i class='fa-solid fa-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='!hidden slick-next pull-right xl:!block'><i class='fa-solid fa-chevron-right'></i></button>",
  });

  // SLIDER BANNER
  $(".slider-banner").slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    // autoplay: true,
    arrows: false,
  });

  // SLIDER BRANDS
  $(".slider-brand").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
    prevArrow: "<button type='button' class='!hidden slick-prev pull-left xl:!block'><i class='fa-solid fa-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='!hidden slick-next pull-right xl:!block'><i class='fa-solid fa-chevron-right'></i></button>",
  });

  // SLIDER PRODUCTS
  $(".slider-products").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
    prevArrow: "<button type='button' class='!hidden slick-prev pull-left xl:!block'><i class='fa-solid fa-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='!hidden slick-next pull-right xl:!block'><i class='fa-solid fa-chevron-right'></i></button>",
  });

  // SLIDER GALLERY PRODUCTS
  $(".slider-single").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='text-3xl text-primary fa-solid fa-chevron-left'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='text-3xl text-primary fa-solid fa-chevron-right'></i></button>",
  });

  $(".slider-nav")
    .on("init", function (event, slick) {
      $(".slider-nav .slick-slide.slick-current").addClass("is-active");
    })
    .slick({
      slidesToShow: 9,
      slidesToScroll: 9,
      dots: false,
      focusOnSelect: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    });

  $(".slider-single").on("afterChange", function (event, slick, currentSlide) {
    $(".slider-nav").slick("slickGoTo", currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $(".slider-nav .slick-slide.is-active").removeClass("is-active");
    $(currrentNavSlideElem).addClass("is-active");
  });

  $(".slider-nav").on("click", ".slick-slide", function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data("slick-index");

    $(".slider-single").slick("slickGoTo", goToSingleSlide);
  });
});
