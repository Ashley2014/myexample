var express = require('express');
var path = require('path');
var app = express();

app.use('/sw-test', express.static(path.join(__dirname, './')))


// app.get('/', function (req, res, next) {
//
//   res.sendFile(path.join(__dirname, './index.html'));
//
// });

app.listen(1234, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.")
  }
});