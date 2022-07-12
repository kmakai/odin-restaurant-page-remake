const header = document.createElement('header');
const logo = document.createElement('h1');
logo.textContent = `Binx's Cafe`;

const nav = document.createElement('nav');
const homeLink = document.createElement('a');
homeLink.textContent = 'Home';
const menuLink = document.createElement('a');
menuLink.textContent = 'Menu';
const contactLink = document.createElement('a');
contactLink.textContent = 'contacts';
nav.append(homeLink, menuLink, contactLink);

export default function createHeader() {
  header.append(logo, nav);
  return header;
}
