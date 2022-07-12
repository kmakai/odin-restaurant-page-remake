const homeDiv = document.createElement('div');
const disDiv = document.createElement('div');
const imgDiv = document.createElement('div');
const disc = document.createElement('p');
const discTitle = document.createElement('h2');

discTitle.textContent = "Welcome to Binx's Cafe";
disc.textContent =
  'the most cozy warm cafe in town. Come in to have yourself the best coffee and meet the cat binx.';
disDiv.append(discTitle, disc);
homeDiv.append(disDiv, imgDiv);

homeDiv.className = 'home';

export default function loadHome() {
  return homeDiv;
}
