console.log('nav')
console.log(document.documentElement,document.body)
require('./css.css')
var container = document.createElement('div')

function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}
let html=require('./html.html')
container.innerHTML=html
document.body.appendChild(container);

let el=document.querySelector("#middle")
let el2=document.querySelector("#middle-2")
test(el)
document.addEventListener('scroll',tt)


function tt() {
  console.log(window.scrollY);

  test(el)
  test(el2)
}

function test(el) {
  // console.log('el '+el.id+' offsetHeight',el.offsetHeight)
  // console.log('el '+el.id+' clientHeight',el.clientHeight)
  // console.log('el '+el.id+' offsetTop',el.offsetTop)
  // console.log('el '+el.id+' getBoundingClientRect',el.getBoundingClientRect())
  // console.log('el '+el.id+' window.pageYOffse',window.pageYOffset)
}
document.querySelector('#documentElement-scrollTop').addEventListener('click',function () {
  // console.log(document.documentElement.outerHTML)
  // alert(document.documentElement.scrollTop)
  // document.documentElement.scrollTop=document.body.scrollTop=1500
  window.scrollY=1500
})

