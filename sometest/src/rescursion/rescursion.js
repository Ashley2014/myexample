

console.log(3323)

let arrSample=[
  {
    name:'aa',
    children:[
      {
        name:'aa',
        children:[
          {
            name:'aa',
            children:[
              {
                name:'aa',
                children:null,
              },
              {
                name:'aa',
                children:null,
              },
            ],
          },
          {
            name:'aa',
            children:[],
          },
          {
            name:'aa',
            children:[],
          },
        ],
      },
      {
        name:'aa',
        children:[],
      }
    ],
  }
]

console.log(arrSample)
console.log(getMenu(arrSample))


function getMenu(arr){
  return arr.map(n=>{
    let newChildren=[]
    if(n.children){
      newChildren=getMenu(n.children)
    }
    return {
      ...n,
      ddd:n.name,
      children:newChildren,
    }
  })
}
