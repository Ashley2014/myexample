let axios =require('axios')
axios.get('http://localhost:1234').then(res=>{
  console.log(111,res)
}).catch(e=>{
  console.log(222,e)
})
