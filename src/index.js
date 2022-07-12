import './style.css';
import header from "./header.js";


const img = new Image();
img.src = "./images/welcome.png"
document.querySelector("#content").appendChild(header());
document.querySelector("#content").appendChild(img);