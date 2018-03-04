console.log('print start')

require('./css.css')
var container = document.createElement('div')
let html=require('./html.html')
container.innerHTML=html
let src=require('./images/sample.jpg')

console.log(src)


document.body.appendChild(container);
