const fse = require('fs-extra')
const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, '../../tmp/component')
const templateFile = path.resolve(__dirname, './template.vue')

generateJs(filePath, templateFile, {
  num: 10,
})


// const data = fs.readFileSync(file, 'utf8')
// console.log(data) // => hello!


function generateJs(filePath, templateFile, {num,async}) {
  num=num||10
  async=async||false

  let templateStr = fs.readFileSync(templateFile, 'utf8')
  let files=Array.from({length: num}, (n, i) => {
    let template = templater(templateStr);
    let str = template({
      content: `${i}`
    });

    let file=path.join(filePath, `my-com-${i}.vue`)
    fse.outputFileSync(file, str)
    return {
      componentName:`my-com-${i}`,
      path:file,
    }
  })
  generateExportJs(filePath,files,{async})

}

function generateExportJs(filePath, files, {async}) {
  async=async||false
  let start = `export default {"install":function (Vue, options) {`
  let str=``
  let end = `}}`
  if(async){
    str=files.map(n=>`Vue.component('${n.componentName}',()=>import('${n.path}'))`)
  }else{
    str=files.map(n=>`Vue.component('${n.componentName}',require('${n.path}').default)`)
  }


  fse.outputFileSync(path.join(filePath, `index.js`), start+str+end)

}


function templater(html) {
  return function (data) {
    for (let x in data) {
      let re = "#\\s?" + x + "\\s?#";
      html = html.replace(new RegExp(re, "ig"), data[x]);
    }
    return html;
  };
};