const arr = [
  ["3", "10", "13"],
  ["4", "10", "13"],
  ["5", "10", "13"],
  ["3", "13", "16"],
  ["4", "13", "16"],
  ["5", "13", "16"],
]


const arrFilter1 = ['', '', '']
const arrFilter2 = ['', '', 10]
const arrFilter3 = ['', 3, 10]



function filterBy(arr,filterArr) {
  let filteredFilter=filterArr.filter(n=>n!=='').map(n=>String(n))
  // console.log(filteredFilter)


  let out=arr.filter(n=>{
    if(filteredFilter.length){
      // console.log(arrayContainsArray(n, filteredFilter))

      if (arrayContainsArray(n, filteredFilter)) {
        return true
      }else{
        return false
      }
    }else{
      return true
    }
  })
  return out
}

function filterByRe(arr,filterArr) {
  let filteredFilter=filterArr.filter(n=>n!=='').map(n=>String(n))
  // console.log(filteredFilter)


  let out=arr.filter(n=>{
    if(filteredFilter.length){
      // console.log(arrayContainsArray(n, filteredFilter))

      if (arrayContainsArray(n, filteredFilter)) {
        return false
      }else{
        return true
      }
    }else{
      return false
    }
  })
  return out
}


/**
 * Returns TRUE if the first specified array contains all elements
 * from the second one. FALSE otherwise.
 *
 * @param {array} superset
 * @param {array} subset
 *
 * @returns {boolean}
 */
function arrayContainsArray (superset, subset) {
  if (0 === subset.length) {
    return true;
  }
  return subset.every(function (value) {
    return (superset.indexOf(value) >= 0);
  });
}



console.log(filterBy(arr,arrFilter1))
console.log(filterBy(arr,arrFilter2))
console.log(filterBy(arr,arrFilter3))

console.log(filterByRe(arr,arrFilter1))
console.log(filterByRe(arr,arrFilter2))
console.log(filterByRe(arr,arrFilter3))


describe("filter", function() {


  it("filter1", function() {

    expect(filterBy(arr,arrFilter1)).toEqual([
      ["3", "10", "13"],
      ["4", "10", "13"],
      ["5", "10", "13"],
      ["3", "13", "16"],
      ["4", "13", "16"],
      ["5", "13", "16"],
    ]);

  });
  it("filter2", function() {

    expect(filterBy(arr,arrFilter2)).toEqual([
      ["3", "10", "13"],
      ["4", "10", "13"],
      ["5", "10", "13"],
    ]);

  });

  it("filter3", function() {

    expect(filterBy(arr,arrFilter3)).toEqual([
      ["3", "10", "13"],
    ]);
  });






});

