const buttonToggle = document.querySelector('.main-nav__toggle');
const navSelector = document.querySelector('.main-nav');
const headerSelector = document.querySelector('.header');

navSelector.classList.remove('main-nav--nojs');
headerSelector.classList.remove('header--nojs');

const openMenu = function(){
  navSelector.classList.toggle('main-nav--close');
  headerSelector.classList.toggle('main-nav--open');
}

buttonToggle.addEventListener('click', openMenu)
