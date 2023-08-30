import '../vendor/swiper';
import {isMobile} from '../utils/is-mobile';

const carouselList = document.getElementById('carousel');

const carouselHero = () => {
  if (carouselList) {
    return new Swiper(carouselList, {
      allowTouchMove: isMobile(),
      slidesPerView: 1,
      speed: 300,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
    });
  }
  return null;
};

export {carouselHero};
