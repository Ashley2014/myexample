console.log(33)
// function getStringifyObject(objInstance) {
//   let result={}
//
//   rescursionObject(objInstance,result)
//
//   let k
//   return result
//
//   function rescursionObject(obj,resultObj ) {
//     if (Array.isArray(obj)) {
//       obj.forEach(n => {
//
//       })
//     } else if (obj instanceof Object) {
//       for ( let k_1 in obj) {
//         k=k_1
//         if (obj.hasOwnProperty(k)) {
//           //recursive call to scan property
//           rescursionObject(obj[k],resultObjIn[k]);
//         }
//       }
//     } else {
//       console.log(k,obj)
//       resultObj[k]=JSON.stringify(obj)
//     }
//
//   };
// }
function rescursionObject(obj) {
  var clone = {};
  for(let i in obj) {
    if(typeof(obj[i])==="object" && obj[i] != null)
      clone[i] = rescursionObject(obj[i]);
    else
      clone[i] = JSON.stringify(obj[i]);
  }
  return clone;
}

let sample = {
  rootV: 3333,
  aa: {
    vv: 112,
    v2: 113,
    inVo: {
      bb: 222
    },
  },
  arr:[{
    na:1
  },{
    na:2
  }]
}


let new1=rescursionObject(sample)
console.log(sample);
console.log(new1);
