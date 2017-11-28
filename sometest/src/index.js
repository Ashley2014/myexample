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
    import('./sku/sku')
    break
  case '/end_loop':
    import('./end_loop/end_loop')
    break
  case '/filter':
    import('./filter/')
    break
  case '/es7/object_map':
    import('./es7/object_map')
    break

}






