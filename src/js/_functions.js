// Подключение свайпера gsap micromodal
// import { gsap, Power2 } from 'gsap';
// import MicroModal from 'micromodal';
// import Swiper, {
//   Navigation,
//   Pagination,
//   Parallax,
//   Mousewheel,
//   Controller,
//   Scrollbar
// } from 'swiper';

import Swiper from './vendor/swiper-bundle.min';

// --- S W I P E R ---
// Swiper.use([Navigation, Pagination, Parallax, Mousewheel, Controller, Scrollbar]);
const swiperHeroImg = new Swiper('.hero-img__slider', {
  loop: true,
  speed: 500,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.hero-img__next',
    prevEl: '.hero-img__prev',
  },
});


const swiperHero = new Swiper('.hero__slider', {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  speed: 2000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  centeredSlides: true,
  runCallbacksOnInit: true
});
// swiperImg.controller.control = swiperText;
// swiperText.controller.control = swiperImg;

// --- M I C R O M O D A L ---
// MicroModal.init({
//   openTrigger: 'data-micromodal-open',
//   closeTrigger: 'data-micromodal-close',
//   disableFocus: true,
//   disableScroll: true,
//   awaitOpenAnimation: true,
//   awaitCloseAnimation: true,
// })
