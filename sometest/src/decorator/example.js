console.log(1234)
function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

function log(target, name, descriptor) {
  const original = descriptor.value;
  console.log(32332)
  // return 43435
  if (typeof original === 'function') {
    descriptor.value = function(...args) {
      console.log(`Arguments: ${args}`);
      try {
        const result = original.apply(this, args);
        console.log(`Result: ${result}`);
        return result;
      } catch (e) {
        console.log(`Error: ${e}`);
        throw e;
      }
    }
  }

  return descriptor;
}


class Example {
  constructor(){
    this.name='333'
  }
  a() {
    console.log(11,this)
  }

  @log
  b(a,b) {
    console.log('22b with log',this)
    return a + b;
  }

  bb(a,b) {
    console.log(22,this)
    return a + b;
  }
}

let ee = new Example();
console.log('ee', ee)
ee.a()
console.log('ee.b(1,2,3)',ee.b(1,2,3))
console.log('ee.bb(1,2,3)',ee.bb(1,2,3))
// ee.a = 1;
// ee.b = 2;
