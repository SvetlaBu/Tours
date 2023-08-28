import Swiper from '../vendor/swiper';
import {isMobile} from '../utils/is-mobile';

const addReviewsSlider = () => {
  if (document.querySelector('.reviews__slider')) {
    return new Swiper('.reviews__slider', {
      allowTouchMove: isMobile(),
      slidesPerView: 'auto',
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
      },
    });
  }
  return null;
};

export {addReviewsSlider};
