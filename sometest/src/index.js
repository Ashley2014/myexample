if (module.hot) {
  module.hot.accept([
    './print.js',
    './code.js',
    // './sku/sku.js'
  ], function () {
    console.log('Accepting the updated printMe module!');
  })
}



switch (window.location.pathname) {
  case '/sku':
    import('./sku/sku')
    break
  case '/end_loop':
    import('./end_loop/end_loop')
    break
}





