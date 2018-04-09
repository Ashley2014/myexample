console.log('sku')

let samples=[
  ['red','blue'],
  ['m','l'],
  ['silk','leather'],
]

let resaultSamples4=[
  [
    ['red','blue'],
    ['m','l'],
  ],
  [
    ['m','l'],
    ['silk','leather'],
  ],
  [
    ['red','blue'],
    ['silk','leather'],
  ],
]
let samples111=['big','hot','milk',]
let result111=[
  [
    'big',
  ],
  [
    'hot',
  ],
  [
    'milk',
  ],
  [
    'big',
    'hot',
  ],
  [
    'big',
    'milk',
  ],
  [
    'hot',
    'milk',
  ],
  [
    'big',
    'hot',
    'milk',
  ],
]

let resaultSamples3=[
  ['red','m'],
  ['red','l'],
  ['red','silk'],
  ['red','leather'],
  ['blue','m'],
  ['blue','l'],
  ['blue','silk'],
  ['blue','leather'],
  ['m','silk'],
  ['m','leather'],
  ['l','silk'],
  ['l','leather'],
]

let samples2=[
    [{name:'red'},{name:'blue'}],
    [{name:'m'},{name:'l'}],
  [{name:'silk'},{name:'leather'}],
]


let exceptResalut=[
  ['red','m','silk'],
  ['red','m','leather'],
  ['red','l','silk'],
  ['red','l','leather'],
  ['blue','m','silk'],
  ['blue','m','leather'],
  ['blue','l','silk'],
  ['blue','l','leather'],
]
console.log(makeSku(samples))
console.log(makeSku(samples2))


function makeSku(arr) {
  let list = [];
  recursionSub(list, arr.length, arr, 0, -1);
  return list
}

function recursionSub(list, count, array, ind, start, indexs) {
  start++;
  if (start > count - 1) {
    return;
  }
  if (start === 0) {
    indexs = new Array(array.length);
  }
  for (indexs[start] = 0; indexs[start] < array[start].length; indexs[start]++) {
    recursionSub(list, count, array, 0, start, indexs);
    if (start === count - 1) {
      let temp = new Array(count);
      temp.forEach((n,ii)=>{

      })
      for (let i = count - 1; i >= 0; i--) {
        temp[start - i] = array[start - i][indexs[start - i]];
      }
      list.push(temp);
    }
  }
}



