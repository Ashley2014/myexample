let str='"{"tenantCode":"880001","conditionList":[{"salePriceStart":"${goodsprice_0}","salePriceEnd":"${goodsprice_1}","brandCode":["${goodsbrand}"],"itemAttributeValueCodeList":["${goodsattr}"],"saleAttributeValueCodeList":["${saleattr}"],"categoryCodeList":["${goodsptn}"]}], ↵"page":{"page":1,"size":50} ↵}"'
var re = /\$\{([\w]*)\}/;
var found = str.match(re);
let str2='${XXX}regreg ${4434} ${sdf_34}'
// console.log(str2.match(re));
let mm
mm = re.exec(str2);
// while (mm != null) {
//   // matched text: match[0]
//   // match start: match.index
//   // capturing group n: match[n]
//   console.log(mm)
//   mm = re.exec(str2);
// }
// do {
//   mm = re.exec(str2);
//   if (mm) {
//     console.log(mm);
//   }
// } while (mm);

console.log(mm);

console.log(found);


// var str = 'For more information, see Chapter 3.4.5.1';
// var re = /see (chapter \d+(\.\d)*)/i;
// var found = str.match(re);
//
// console.log(found);

//
// var myString = "something format_abc format_rfe";
// var myRegexp = /(?:^|\s)format_(.*?)(?:\s|$)/g;
// var match = myRegexp.exec(myString);
// // var match = myString.match(myRegexp);
// console.log(match)
// while (match != null) {
//   // matched text: match[0]
//   // match start: match.index
//   // capturing group n: match[n]
//   console.log(match[0])
//   match = myRegexp.exec(myString);
// }

var myStr='"{"tenantCode":"880001","conditionList":[{"salePriceStart":"${goodsprice_0}","salePriceEnd":"${goodsprice_1}","brandCode":["${goodsbrand}"],"itemAttributeValueCodeList":["${goodsattr}"],"saleAttributeValueCodeList":["${saleattr}"],"categoryCodeList":["${goodsptn}"]}], ↵"page":{"page":1,"size":50} ↵}"'
console.log(getMatch(myStr))
console.log(getMatch(str2))
console.log(getMatch('${}${5}666'))

function getMatch(str) {
  var re = /\$\{([\w]*)\}/;
  let matchs=[]
  let newStr=str
  mm = re.exec(newStr);
  while (mm != null) {
    matchs.push(mm[1])
    newStr=mm['input'].replace(mm[0],'')
    mm = re.exec(newStr)
  }
  return matchs
}


let reg = /(\${)([^\${}]+)(})/g
myStr.replace(reg, ($0, $1, $2, $3) => {
  console.log($0, $1, $2, $3)
  // this.replaceParam.push($2)
})
