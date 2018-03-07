var http = require("http");
var server = http.createServer(function(req, res) {
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Methods', '*');
  // res.header('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')

  if(req.url=='/'){
    res.end(JSON.stringify({
      msg:'hallo',
      query:req.query
    }));
  }

});

server.listen(1234);
console.log("Server is listening");
