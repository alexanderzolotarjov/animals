const mobileMenu = document.querySelector('.mobile-menu');
const mobileButton = document.querySelector('.header__button');
const mobileButtonOpen = document.querySelector('.button-image__open');
const mobileButtonClose = document.querySelector('.button-image__close');

const body = document.querySelector('.body');

mobileButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu_open');
  mobileButtonOpen.classList.toggle('button-image__open_active');
  mobileButtonClose.classList.toggle('button-image__close_active');
  body.classList.toggle('body_not-scroll');
})