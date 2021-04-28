import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const navMenu = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');

navToggle.addEventListener('click', (e) => {
  navToggle.classList.toggle('nav__toggle--active');

  if (navToggle.classList.contains('nav__toggle--active')) {
    navMenu.classList.add('nav--active');
  } else {
    navMenu.classList.remove('nav--active');
  }
});
