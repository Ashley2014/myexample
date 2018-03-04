console.log('endLoop')
let sampleArr=[0,1,2]


function test1() {
  sampleArr.forEach(n=>{
    if(n==0){
      return 0

    }
  })
  return 1
}

function test2() {
  for(let i=0;i<sampleArr.length;i++){
    if(sampleArr[i]==0){
      return 0
    }
  }
  return 1
}

// console.log(test1(),test2())
describe("end loop", function() {


  it("forEach cannot be end", function() {

    expect(test1()).toEqual(1);
  });
  it("for loop can be end", function() {

    expect(test2()).toEqual(0);
  });
});
