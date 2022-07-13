import './style.css';
import header from './header.js';
import home from './home.js';
import menu from './menu.js';
import contacts from './contact.js';
const content = document.querySelector('#content');

content.append(header());

const headerdiv = document.querySelector('.headr');
const homelink = document.getElementById('homelink');
const menulink = document.querySelector('#menulink');
const contactlink = document.querySelector('#contactlink');

homelink.addEventListener('click', () => {
  console.log('clicked');
});
