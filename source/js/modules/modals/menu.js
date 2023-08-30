let body = document.querySelector('.wrapper');
let header = document.querySelector('.main-header');
let navMain = document.querySelector('.page-nav');
let navToggle = document.querySelector('.page-nav__toggle');

const toggleMenu = () => {
  header.classList.remove('page-nav--nojs');

  navToggle.addEventListener('click', function () {
    header.classList.toggle('is-opened');
    body.classList.toggle('on-menu');
    if (navMain.classList.contains('page-nav--closed')) {
      navMain.classList.remove('page-nav--closed');
      navMain.classList.add('page-nav--opened');
    } else {
      navMain.classList.add('page-nav--closed');
      navMain.classList.remove('page-nav--opened');
    }
  });
};

export {toggleMenu};
