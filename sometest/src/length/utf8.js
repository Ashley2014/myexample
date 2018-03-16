// UTF8字符集实际长度计算
function getStrLeng(str){
  var realLength = 0;
  var len = str.length;
  var charCode = -1;
  for(var i = 0; i < len; i++){
    charCode = str.charCodeAt(i);
    if (charCode >= 0 && charCode <= 128) {
      realLength += 1;
    }else{
      // 如果是中文则长度加3
      realLength += 3;
    }
  }
  return realLength;
}
