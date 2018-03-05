console.log(1234)
function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

function log_o(target, name, descriptor) {
  const original = descriptor.value;
  console.log(32332)
  // return 43435
  // if (typeof original === 'function') {
  //   descriptor.value = function(...args) {
  //     console.log(`Arguments: ${args}`);
  //     try {
  //       const result = original.apply(this, args);
  //       console.log(`Result: ${result}`);
  //       return result;
  //     } catch (e) {
  //       console.log(`Error: ${e}`);
  //       throw e;
  //     }
  //   }
  // }

  return ()=>{};
  return descriptor;
}
function log(name) {
  console.log('denter looo',name)
  return function decorator(t, n, descriptor) {
    console.log('denter looo3',t,6, n,77, descriptor.value,55)
    const original = descriptor.value;

    if (typeof original === 'function') {
      descriptor.value = function(...args) {
        console.log(`Arguments for ${name}: ${args}`);
        try {
          const result = original.apply(this, args);
          console.log(`Result from ${name}: ${result}`);
          return result;
        } catch (e) {
          console.log(`Error from ${name}: ${e}`);
          throw e;
        }
      }
    }
    return descriptor;
  };
}


class ExampleP {
  constructor(){
    this.name='333'
  }
  abc(){
    console.log(3233)
  }
}
class Example extends ExampleP{

  a() {
    console.log(11,this)
  }

  // @log_o
  @log('tt')
  static async b(a,b) {
    console.log('22b with log',this)
    return a + b;
  }

  bb(a,b) {
    console.log(22,this)
    return a + b;
  }
  static wer(a,b) {
    console.log(22,this)
    return a + b;
  }
}

let ee = new Example();
console.log('ee', ee)
ee.a()
console.log('Example.b(1,2,3)',Example.b(1,2,3))
// console.log('ee.b(1,2,3)',ee.b(1,2,3))
console.log('ee.bb(1,2,3)',ee.bb(1,2,3))
// ee.a = 1;
// ee.b = 2;
