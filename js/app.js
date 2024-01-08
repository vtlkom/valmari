const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 60,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.courses__slider-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.courses__slide-next',
    prevEl: '.courses__slide-prev',
  },
});

const masterClassesSwiper = new Swiper('.master-classes__swiper', {
  slidesPerView: 2,
  spaceBetween: 159,
  loop: true,

  navigation: {
    nextEl: '.master-classes__slider-next',
    prevEl: '.master-classes__slider-prev',
  },
  pagination: {
    el: '.master-classes__slider-pagination',
    clickable: true,
  },
});

const offesrSlider = new Swiper('.offers__slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: '.offers__slider-next',
    prevEl: '.offers__slider-prev',
  },
  pagination: {
    el: '.offers__slider-pagination',
    clickable: true,
  },
});