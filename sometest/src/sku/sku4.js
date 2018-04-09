var a = [1, 2, 3, 4];

function groupSplit(arr, size) {
  var maxSize = arr.length, groupArr = [];

  if(size >= 1 && size <= maxSize){
    getArr(arr, 0, []);
  }



  function each(arr, index, fn){
    for (let i = index; i < maxSize; i++) {
      fn(arr[i], i, arr);
    }
  }

  function getArr(arr, _size, _arr, index){
    if(_size === size){
      return;
    }

    let len = _size + 1;

    each(arr, index || 0, function(val, i, arr){

      _arr.splice(_size, 1, val);

      if(_size === size - 1){
        groupArr.push(_arr.slice());
      }

      getArr(arr, len, _arr, i + 1);
    });
  }

  return groupArr;
}

function groupSplitAll(arr) {
  let groupArrAll = Array.from({length:arr.length},(n,i)=>groupSplit(arr,i+1))
  return groupArrAll.reduce((prev,cur)=>{
    return prev.concat(cur)
  },[])
}

var ret = groupSplit(a, 2);
var ret2 = groupSplitAll(a);
console.log(ret); // [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
console.log(ret2); // [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
