var filtered=[1,2,3,4].filter(function(e){
  return this.indexOf(e)<0;
},[2,4]);

