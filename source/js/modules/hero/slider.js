import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

let slide = document.querySelector('.hero__item');

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
          if (iframes[i] !== null) {
            let temp = iframes[i].src;
            iframes[i].src = temp;
          }
        }
      }
    });
  }
  return null;
};

export {addHeroSlider};
