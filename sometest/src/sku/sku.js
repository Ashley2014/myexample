console.log('sku')

let samples=[
  {name:'布料',item:[{name:'棉'},{name:'涤纶'}],},
  {name:'尺码',item:[{name:'m'},{name:'l'},{name:'s'}],},
  {name:'颜色',item:[{name:'白色'},{name:'黑色'}],},
]

/*
expect
 */
let expectResult=[
  {
    name:'棉',
    item:[
      {
        name:'m',item:[
          {name:'白色',item:[]},
          {name:'黑色',item:[]},
        ]
      },
      {
        name:'l',item:[
          {name:'白色',item:[]},
          {name:'黑色',item:[]},
        ]
      },
      {
        name:'s',item:[
          {name:'白色',item:[]},
          {name:'黑色',item:[]},
        ]
      },
    ]
  },
  {
    name:'涤纶',
    item:[
      {
        name:'m',item:[
          {name:'白色',item:[]},
          {name:'黑色',item:[]},
        ]
      },
      {
        name:'l',item:[
          {name:'白色',item:[]},
          {name:'黑色',item:[]},
        ]
      },
      {
        name:'s',item:[
          {name:'白色',item:[]},
          {name:'黑色',item:[]},
        ]
      },
    ]
  },
]

let expectResult2=[
  {
    name:['棉','m','白色',],
    store:12,
    cover:'sample',
  },
  {
    name:['棉','m','黑色',]
  },
  {
    name:['棉','l','白色',]
  },
  {
    name:['棉','l','黑色',]
  },
  {
    name:['棉','s','白色',]
  },
  {
    name:['棉','s','黑色',]
  },
  {
    name:['涤纶','m','白色',]
  },
  {
    name:['涤纶','m','黑色',]
  },
  {
    name:['涤纶','l','白色',]
  },
  {
    name:['涤纶','l','黑色',]
  },
  {
    name:['涤纶','s','白色',]
  },
  {
    name:['涤纶','s','黑色',]
  },
]



function makeSkutmp(arr) {
  let out=[]
  let cache=arr.map(n=>false)

  arr.forEach((spec,i)=>{
    putInResult(spec,out,i)
  })

  return out


  function putInResult(spec,result,specIndex) {
    // console.log('spec',spec)
    // console.log('result',result)

    // //0
    // spec.item.forEach(n=>{
    //   result.push(Object.assign({},n,{item:[]}))
    // })
    //
    // //1
    // spec.item.forEach(n=>{
    //   result.item.forEach((n2)=>{
    //     n2.push(Object.assign({},n,{item:[]}))
    //   })
    // })
    //

    // console.log(specIndex)

    if(result.length<spec.item.length){
      spec.item.forEach(n=>{
        result.push(Object.assign({},n,{item:[]}))
      })
    }else{
      result.forEach((n)=>{
        putInResult(spec,n.item,specIndex)
      })
    }




    spec.item.forEach(n=>{
      result.push(Object.assign({},n,{item:[]}))
    })


  }

  function putInResult2(spec,result) {
    spec.item.forEach(n=>{
      result.push(Object.assign({},n,{item:[]}))
    })
  }
}


function makeSku(arr) {
  let out=[]
  arr.forEach((spec,i)=>{
    putIn(spec,out,i)
  })
  return out
  function putIn(spec,result) {
    if(!result.length){
      spec.item.forEach(n=>{
        result.push(Object.assign({},n,{item:[]}))
        // result.push({
        //   ...n,
        //   item:[],
        // });
        // result.push({
        //   ...JSON.parse(JSON.stringify(n)),
        //   item:[],
        // });
      })
    }else{
      result.forEach((n)=>{
        putIn(spec,n.item)
      })
    }
  }
}



function makeSku2(arr) {
  let out=[]
  arr.forEach((spec,i)=>{
    putIn(spec,out)
  })
  return out
  function putIn(spec,result) {
    result
    if(!result.length){
      spec.item.forEach(n=>{
        result.push(Object.assign({},n,{item:[]}))
      })
    }else{
      result.forEach((n)=>{
        putIn(spec,n.item)
      })
    }
  }
}





let r1sku=makeSku(samples)
console.log('1',r1sku)
let f1sku=flattenSku(r1sku)
console.log(2,f1sku)


function flattenSku(arr) {
  let out=[]
  arr.forEach(n=>{
    takeOut(n.item,out,[n])
  })
  return out
  function takeOut(arr,result,names=[]) {
    // console.log(arr)
    arr.forEach(n=>{
      if(n.item.length){
        takeOut(n.item,result,names.concat(n))
      }else{
        result.push(Object.assign({},n,{
          names:names.concat(n),
        }))
      }
    })
  }
}


describe("data string compare method", function() {


  // it("'test", function() {

    // expect(makeSku(samples)).toEqual(expectResult);
  // });
});


function makeSkuSquare() {

}



function makeSample() {
  let level1=[{'颜色':['白色','黄色']},'尺码','布料',]


}
