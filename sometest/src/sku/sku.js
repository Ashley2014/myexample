console.log('sku')

let samples=[
  {name:'布料',item:[{name:'棉'},{name:'涤纶'}],},
  {name:'尺码',item:[{name:'m'},{name:'l'}],},
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
    ]
  },
]



function makeSku(arr) {
  let out=[]
  arr.forEach((level)=>{
    putInResult(level,out)
  })
  return out
}




function putInResult(arr,result) {
  // console.log('arr',arr)
  // console.log('result',result)
  if(result.length<arr.item.length){
    arr.item.forEach(n=>{
      result.push(Object.assign({},n,{item:[]}))
    })
  }else{
    result.forEach(n=>{
      putInResult(arr,n.item)
    })
  }
}


describe("data string compare method", function() {


  it("'test", function() {


    expect(makeSku(samples)).toEqual(expectResult);
  });
});


function makeSkuSquare() {

}



function makeSample() {
  let level1=[{'颜色':['白色','黄色']},'尺码','布料',]


}
