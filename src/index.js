import './style.css';
import header from './header.js';
import home from './home.js';
import menu from './menu.js';
import contacts from './contact.js';

const content = document.querySelector('#content');
const main = document.createElement('main');

content.append(header(), main);
main.append(home());

const homelink = document.getElementById('homelink');
const menulink = document.querySelector('#menulink');
const contactlink = document.querySelector('#contactlink');

homelink.addEventListener('click', () => {
  main.innerHTML = '';
  main.append(home());
});

menulink.addEventListener('click', () => {
  main.innerHTML = '';
  main.append(menu());
});

contactlink.addEventListener('click', () => {
  main.innerHTML = '';
  main.append(contacts());
});
