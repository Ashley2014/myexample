


async function aaa(params={}) {
  let p1=new Promise((resolve,reject)=>{
    setTimeout(e=>{
      resolve(true)
    },3000)
  })
  await p1
  console.log('fdrgere')
  return '11'


}
console.log('aaa',aaa().then(res=>{
  console.log(res)
}))
