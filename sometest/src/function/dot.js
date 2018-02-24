function foo(a,b,...c) {
  console.log(a,b,c)
}
foo(1,2,3,45,6,7)
foo(...[1,3,4],...[1,2,3],5)
foo(...{},...[1,2,3],5)


