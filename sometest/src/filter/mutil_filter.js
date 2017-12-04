console.log('/filter/mutil_filter')
//
// const input = [
//   { type: 'multi', value: 'a' },
//   { type: 'multi', value: 'b' },
//   { type: 'single', value: 'c' },
// ];
//
// const list = [
//   [{ tag: ['a', 'b'], value: 'foo' }],
//   [{ tag: ['a', 'b', 'c'], value: 'foo2' }],
//   [{ tag: ['a', 'c'], value: 'bar' }],
//   [{ tag: ['a', 'd'], value: 'bar2' }],
// ];
//
//
// let mutile1=['a','b']
// let single1=['c','d']
//
// let source1=[
//   ['a','b','c'],
//   ['a','b'],
//   ['a','c'],
//   ['a','d'],
// ]
//
//
// let input1=['a','b','c']
//
//
//
//
// function filterSource(source,mutileList=[],singleList=[],inputList=[]) {
//   let out=[...source]
//
//   inputList.forEach((n,i)=>{
//
//     if(singleList.includes(n)){
//
//     }else if(mutileList.includes(n)){
//
//     }
//   })
//   return []
// }
//
//
//
//
//
//
// function filterSource2(source,inputList=[]) {
//   let out=[...source]
//
//   // inputList.forEach((n,i)=>{
//   //   if(source['tag'].includes()){
//   //
//   //   }
//   // })
//   source.reduce((prev,cur)=>{
//
//
//
//
//
//
//   },out)
//
//   return []
// }
//
// console.log(filterSource2(list,input))

// describe("filter", function() {
//
//   it("filter1", function() {
//     // expect().toEqual([
//     //   ["3", "10", "13"],
//     // ]);
//
//   });
//
// });


const input = [
  // { type: 'multi', value: 'a' },
  { type: 'multi', value: 'b' },
  // { type: 'single', value: 'c' },
  // { type: 'single', value: 'd' },
];

const list = [
  { tag: ['a', 'b'], value: 'foo' },

  { tag: ['a', 'c'], value: 'foo' },
  { tag: ['b', 'c'], value: 'foo' },
  { tag: ['a', 'b', 'c'], value: 'foo2' },

  { tag: ['a', 'd'], value: 'bar' },
  { tag: ['b', 'd'], value: 'bar2' },
  { tag: ['a', 'b', 'd'], value: 'bar2' },
];

function filter(input, list) {

  return list.filter(({ tag }) => {

    let cache = false;
    input.forEach(({ type, value }) => {
      if (type === 'multi') {
        cache = cache || tag.indexOf(value) >= 0;
      } else {
        cache = tag.indexOf(value) >= 0;
      }
    });
    return cache;
  });
}


function filter2(input, list) {
  let source=[...list]
  return input.reduce((prev,{ type, value })=>{
    return prev.filter(({ tag }) => {
      let cache = false;
      if (type === 'multi') {
        cache = cache || tag.indexOf(value) >= 0;
      } else {
        cache = tag.indexOf(value) >= 0;
      }
      return cache;
    })

  },source)
}


var a = filter(input, list);
var a2 = filter2(input, list);
console.log(a);
console.log(a2);
