import Swiper from './swiper';
import {isMobile} from '../utils/is-mobile';

const addCoachesSlider = () => {
  if (document.querySelector('.training__slider')) {
    return new Swiper('.training__slider', {
      allowTouchMove: isMobile(),
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: '.training__next',
        prevEl: '.training__prev',
      },
    });
  }
};

export {addCoachesSlider};
