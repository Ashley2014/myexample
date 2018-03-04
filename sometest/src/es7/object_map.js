let objSample={
  a:1,
  b:2,
  c:3,
}
console.log(234)
function map(obj) {
  return {...Object.assign(...Object.entries(obj).map(([k, v]) => ({[k]:v*2})))}
  // return {}
}
function mapobjToArr(obj) {
  // Object.entries(obj).map(([k, v]) => ({[k]:v*2}))
  //
  // return {...Object.assign(...Object.entries(obj).map(([k, v]) => ({[k]:v*2})))}
  // return {}
}


describe("object map", function() {
  it("new obj", function() {
    expect(map(objSample)).toEqual({
      a:2,
      b:4,
      c:6,
    });
  });
  it("old obj", function() {
    expect(objSample).toEqual({
      a:1,
      b:2,
      c:3,
    });
  });


});

