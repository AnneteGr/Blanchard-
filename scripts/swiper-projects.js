document.addEventListener('DOMContentLoaded', function(){
  const projectsSlider = new Swiper(".partners__container", {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 2,

    grid: {
      rows: 1,
      fill: "row"
    },
    navigation: {
      nextEl: ".partners__swiper-btn--next",
      prevEl: ".partners__swiper-btn--prev"
    },

    breakpoints: {
      200: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },

      700: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 34
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 50
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
