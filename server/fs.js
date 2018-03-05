let fs= require('fs')
let path= require('path')
let out=`${path.join(__dirname)}/eer.html`
console.log(out)
fs.writeFileSync(out, 'ewfewf', (err) => {
  if (err) throw err;
  console.log(`The file ${out} has been saved!`);
});


let flies=fs.readdirSync('./')

let dir=__dirname
let dirJoin=path.join(__dirname,'tt')

let aa=333
console.log(333)
