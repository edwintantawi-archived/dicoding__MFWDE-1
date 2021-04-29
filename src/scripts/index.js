import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

import { restaurants } from '../DATA.json';

const navMenu = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const layer = document.querySelector('.layer');
const header = document.querySelector('.header');

navToggle.addEventListener('click', (e) => {
  e.preventDefault();
  navToggle.classList.toggle('nav__toggle--active');

  if (navToggle.classList.contains('nav__toggle--active')) {
    navMenu.classList.add('nav--active');
    layer.classList.add('layer--active');
    document.body.style.overflowY = 'hidden';
  } else {
    navMenu.classList.remove('nav--active');
    layer.classList.remove('layer--active');
    document.body.style.overflowY = 'auto';
  }

  e.stopPropagation();
});

window.addEventListener('scroll', () => {
  const position = window.pageYOffset;
  if (position > 85) {
    header.classList.add('header--active');
  } else {
    header.classList.remove('header--active');
  }
});

const listContent = document.querySelector('#root-content');

restaurants.forEach((restaurant) => {
  listContent.innerHTML += `
    <div class="list__item">
      <div class="list__image--container">
        <img
          src="${restaurant.pictureId}"
          alt="${restaurant.name}"
          class="list__image"
        />
      </div>
      <div class="list__content">
        <div class="list__data">
          <h2 class="list__title">${restaurant.name}</h2>
          <p class="list__description">
            ${restaurant.description}
          </p>
        </div>
        <div class="list__info">
          <div>
            <h3>Rating:</h3>
            <span>${restaurant.rating}</span>
          </div>
          <div>
            <h3>City:</h3>
            <span>${restaurant.city}</span>
          </div>
        </div>
      </div>
    </div>
  `;
});
