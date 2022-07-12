import './style.css';
import header from './header.js';
import home from './home.js';
import menu from './menu.js';

document.querySelector('#content').appendChild(header());
document.querySelector('#content').appendChild(menu());
