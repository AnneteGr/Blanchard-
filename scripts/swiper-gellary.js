document.addEventListener('DOMContentLoaded', function(){
  const gallerySlider = new Swiper(".gallery__swiper-container", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20,
    grid: {
      rows: 1,
      fill: "row"
    },

    pagination: {
      el: ".gallery .swiper__counter",
      type: "fraction"
    },
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-previous"
    },

    breakpoints: {
      200: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 38
      },

      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },

      1500: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });
});
