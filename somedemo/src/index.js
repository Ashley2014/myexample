if (module.hot) {
  module.hot.accept([
    // './sku/sku.js'
  ], function () {
    console.log('Accepting the updated printMe module!');
  })
}
import './a.less'

console.log(window.location.pathname)
switch (window.location.pathname) {
  // case '/circlr':
  //   import('./circlr')
  //   break;
  case '/scroll_nav':
    import('./scroll_nav')
    break;
  case '/html_loader':
    import('./html_loader')
    break;
  case '/print':
    import('./print')
    break;

}






