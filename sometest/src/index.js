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
  case '/filter/mutil_filter':
    import('./filter/mutil_filter')
    break
  case '/es7/object_map':
    import('./es7/object_map')
    break
  case '/es7/async':
    import('./es7/async')
    break
  case '/uniq/uniq':
    import('./uniq/uniq')
    break
  case '/class/class':
    import('./class/class')
    break
  case '/decorator':
    import('./decorator')
    break
  case '/decorator/example':
    import('./decorator/example')
    break
  case '/decorator/classdecorator':
    import('./decorator/classdecorator')
    break
  case '/function/dot':
    import('./function/dot')
    break
  case '/json/covert':
    import('./json/covert')
    break
  case '/reg/regmatch':
    import('./reg/regmatch')
    break

}






