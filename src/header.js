const header = document.createElement("header");
const logo = document.createElement("h1");
logo.textContent = `Binx's Cafe`;

export default function createHeader(){
  header.appendChild(logo);
  return header;
}