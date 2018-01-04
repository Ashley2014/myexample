console.log('uniq')
let sampleArr=[0,1,2,6,2,1]

function uniq(arr) {
  let newArr=[]
  let hash={}
  arr.forEach(n=>{
    if(!hash[n]){
      newArr.push(n)
    }
    hash[n]=true
  })
  return newArr
}

// console.log(test1(),test2())
describe("uniq", function() {

  it("[0,1,2,6,2,1] should be [0,1,2,6]", function() {
    expect(uniq([0,1,2,6,2,1])).toEqual([0,1,2,6]);
  });
});
