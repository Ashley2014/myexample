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



function makeSku(arr) {
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



function makeSku2(arr) {
  let out=[]
  arr.forEach((spec,i)=>{
    putIn(spec,out,i)
  })
  return out
  function putIn(spec,result) {
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





console.log(makeSku2(samples))

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
