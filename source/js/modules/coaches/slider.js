import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const addInstructorsSlider = () => {
  if (document.querySelector('.coaches__slider')) {
    return new Swiper('.coaches__slider', {
      allowTouchMove: isMobile(),
      spaceBetween: 30,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
      navigation: {
        nextEl: '.coaches__next',
        prevEl: '.coaches__prev',
      },
    });
  }
  return null;
};

export {addInstructorsSlider};
