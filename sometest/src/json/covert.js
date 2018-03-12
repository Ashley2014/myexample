// console.log(33)
//
var obj={
  aa:33,
  foo:1===0,
  fun:function () {console.log(123)}
}

console.log(obj)
var objStr=JSON.stringify(obj)
console.log(objStr)
// var objStrPar=JSON.parse(objStr)
// console.log(objStrPar)


var objS='{"aa":33,"foo":"1===0","fun":"(function(){return function () {console.log(123)}})()","fun2":"function fun2() {console.log(321)}"}'
var newObj=JSON.parse(objS)
newObj.foo=eval(newObj.foo)
newObj.fun=eval(newObj.fun)
newObj.fun2=eval(newObj.fun2)
newObj.fun()
// newObj.fun2()
console.log(newObj,typeof newObj.fun,typeof newObj.fun2)


// console.log(newObj.fun())

