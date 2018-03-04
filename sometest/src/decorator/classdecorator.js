function log(Class) {
  console.log(3242)
  //什么都不return 或 return实例
  // return

  // return (...args) => {
  //   console.log(args);
  //   // // return
  //   // return new Class(...args);
  // };
  // return function(...args)  {
  //   console.log(args);
  //   // // return
  //   // return new Class(...args);
  // };
}
@log
class Example {
  constructor(name, age) {
    this.name='333'
  }
}

const e = new Example('Graham', 34);
// [ 'Graham', 34 ]
console.log('e',e);


function log2(name) {
  return function decorator(Class) {
    return (...args) => {
      console.log(`Arguments for ${name}: args`);
      return new Class(...args);
    };
  }
}

@log2('Demo')
class Example2 {
  constructor(name, age) {}

}

const e2 = new Example2('Graham', 34);
// Arguments for Demo: args
console.log(e2);
// Example {}
