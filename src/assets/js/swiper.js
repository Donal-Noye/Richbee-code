import Swiper from 'swiper/bundle';

const swiper = new Swiper('.analogs__container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    734: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1130: {
      slidesPerView: 3,
      
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
      centerSlides: false,
    }
  }
});