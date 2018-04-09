console.log('sku')

let samples=[
  ['red','blue'],
  ['m','l'],
  ['silk','leather'],
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
      for (let i = count - 1; i >= 0; i--) {
        temp[start - i] = array[start - i][indexs[start - i]];
      }
      list.push(temp);
    }
  }
}



