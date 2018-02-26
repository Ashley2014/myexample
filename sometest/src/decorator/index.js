
@testable
class Math1 {
  @log
  add(a, b) {
    console.log('this',this)
    return a + b;
  }

  bbb(a, b) {
    console.log('this',this,this.isTestable)
  }
}



function testable(target) {
  console.log(target)
  target.isTestable = true;
}

function log(target, name, descriptor) {
  console.log(target)
  var oldValue = descriptor.value;
  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };

  return descriptor;
}
// function log(name) {
//   return function decorator(t, n, descriptor) {
//     const original = descriptor.value;
//     if (typeof original === 'function') {
//       descriptor.value = function(...args) {
//         console.log(`Arguments for ${name}: ${args}`);
//         try {
//           const result = original.apply(this, args);
//           console.log(`Result from ${name}: ${result}`);
//           return result;
//         } catch (e) {
//           console.log(`Error from ${name}: ${e}`);
//           throw e;
//         }
//       }
//     }
//     return descriptor;
//   };
// }

const math1 = new Math1();
console.log('math1',math1)

// passed parameters should get logged now
math1.add(2, 4);
math1.bbb();


class Person {
  @readonly
  name() {

    return `${this.first} ${this.last}`
  }
}
function readonly(target, name, descriptor){
  // descriptor对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
  descriptor.writable = false;
  return descriptor;
}


