console.log('circlr')
import circlr from 'circlr';
import('./css/index.css')
var container = document.createElement('div')

function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}
let html=require('./html/html.html')
container.innerHTML=html
document.body.appendChild(container);




const el = document.querySelector('.rotation');
el.style.padding='20px'
el.style.backgroundColor='#f08'
const btnScroll  = document.querySelector('.btn-scroll');
const btnCycle = document.querySelector('.btn-cycle');
const btnReverse = document.querySelector('.btn-reverse');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const btnPlay = document.querySelector('.btn-play');
const btnPlayTo = document.querySelector('.btn-play-to');

for(let i=0;i<=180;i++){
  var elem = document.createElement("img");
  elem.setAttribute("src", require(`./images/c1/c_0${pad(i,3)}.png`));
  elem.style.backgroundColor='#f88'
  el.appendChild(elem)
}


let camera = circlr(el).scroll(true);

btnScroll.addEventListener('click', (e) => {
    toggleActive(e.target);
    camera.scroll(isActive(e.target));
}, false);

btnCycle.addEventListener('click', (e) => {
    toggleActive(e.target);
    camera.cycle(isActive(e.target));
}, false);

btnReverse.addEventListener('click', (e) => {
    toggleActive(e.target);
    camera.reverse(isActive(e.target));
}, false);

btnPrev.addEventListener('click', () => {
    camera.prev();
}, false);

btnNext.addEventListener('click', () => {
    camera.next();
}, false);

btnPlay.addEventListener('click', (e) => {
    if (e.target.innerHTML === 'Play') {
        camera.play();
        e.target.innerHTML = 'Stop';
    } else {
        camera.stop();
        e.target.innerHTML = 'Play';
    }
}, false);

btnPlayTo.addEventListener('click', () => {
    camera.play(0);
}, false);

function toggleActive(el) {
    if (isActive(el)) {
        el.className = el.className.replace(/(active)/, '');
    } else {
        el.className += ' active';
    }
}

function isActive(el) {
    return el.className.includes('active');
}

