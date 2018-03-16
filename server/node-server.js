var http = require("http");
var server = http.createServer(function(req, res) {
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Methods', '*');
  // res.header('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')

  if(req.url=='/'){

    if (req.method == 'POST') {
      console.log("POST");
      var body = '';
      req.on('data', function (data) {
        body += data;
        console.log("Partial body: " + body);

        res.end(JSON.stringify({
          msg:'post received',
          data:body
        }));
      });

      // req.on('end', function () {
      //   console.log("Body: " + body);
      // });
      // res.writeHead(200, {'Content-Type': 'text/html'});


    }else{
      res.end(JSON.stringify({
        msg:'hallo',
        query:req.query
      }));

    }
  }else if(req.url=='/simple'){
    if (req.method == 'POST') {
      console.log("POST");
      var body = '';
      req.on('data', function (data) {
        body += data;
        console.log("Partial body: " + body);

        res.end(JSON.stringify({
          msg:'post received simple',
          data:body
        }));
      });
      req.on('end', function () {
        console.log("Body: " + body);
      });
      // res.writeHead(200, {'Content-Type': 'text/html'});


    }else{
      res.end('get received');

    }
  }else if(req.url=='/simple/api'){

    console.log("/simple/api ");

    if (req.method == 'POST') {
      console.log("POST");
      var body = '';
      req.on('data', function (data) {
        body += data;
        console.log("Partial body: " + body);

        res.end(JSON.stringify({
          msg:'post received simple api',
          data:body
        }));
      });
      // req.on('end', function () {
      //   console.log("Body: " + body);
      // });
      // res.writeHead(200, {'Content-Type': 'text/html'});


    }else{
      res.end('get simple api received');

    }
  }else if(req.url=='/ssimple/api'){

    console.log("/ssimple/api ");

    if (req.method == 'POST') {
      console.log("POST");
      var body = '';
      req.on('data', function (data) {
        body += data;
        console.log("Partial body: " + body);

        res.end(JSON.stringify({
          msg:'post received simple api',
          data:body
        }));
      });
      // req.on('end', function () {
      //   console.log("Body: " + body);
      // });
      // res.writeHead(200, {'Content-Type': 'text/html'});


    }else{
      res.end('get simple api received');

    }
  }


});

server.listen(1234);
console.log("Server is listening");
