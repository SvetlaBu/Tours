import Swiper from '../vendor/swiper';
import {isMobile} from '../utils/is-mobile';

const addAdvantagesSlider = () => {
  const width = window.innerWidth;
  if (width > 1199) {
    return new Swiper('.advantages__slider', {
      allowTouchMove: isMobile(),
      loop: true,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.advantages__next',
        prevEl: '.advantages__prev',
      },
    });
  }
  return null;
};

export {addAdvantagesSlider};
