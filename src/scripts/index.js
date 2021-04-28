import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

import { restaurants } from '../DATA.json';

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

const listContent = document.querySelector('#root-content');

restaurants.forEach((restaurant, idx) => {
  listContent.innerHTML += `
    <div class="list__item">
            <img
              src="${restaurant.pictureId}"
              alt="${restaurant.name}"
              class="list__image"
            />
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
