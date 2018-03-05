class aaa {
}
class bbb extends aaa {
  static async tt(){
    console.log(this.a)
    this.a()
  }
  static a(){
    console.log(11)
  }
}
bbb.tt()

// ccc={
//   fun(){
//     console.log(223)
//   }
// }

// new bbb().bbb()


