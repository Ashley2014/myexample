if (module.hot) {
  module.hot.accept([
    './print.js',
    './code.js',
    // './sku/sku.js'
  ], function () {
    console.log('Accepting the updated printMe module!');
  })
}


console.log(window.location.pathname)
switch (window.location.pathname) {
  case '/sku':
    require('./sku/sku')
    break
  case '/end_loop':
    require('./end_loop/end_loop')
    break
  case '/filter':
    require('./filter/')
    break
  case '/es7/object_map':
    require('./es7/object_map')
    break

}






