import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const addHeroSlider = () => {
  if (document.querySelector('.hero__slider')) {
    const swiper = new Swiper('.hero__slider', {
      allowTouchMove: isMobile(),
      pagination: {
        el: '.hero__pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `<button class="hero__pagination-button ${className} type="button" aria-label="Перейти к ${index + 1} слайду"></button>`;
        },
      },
      loop: true,
    });
    swiper.on('slideChange', function () {
      if (document.querySelector('iframe')) {
        let iframes = document.querySelectorAll('iframe');
        for (let i = 0; i < iframes.length; i++) {
          iframes.remove();
        }
      }
      swiper.update();
    });
  }
  return null;
};

export {addHeroSlider};
