var express = require('express');
var app = express();
// app.set('trust proxy', true)

app.use(`/abc`, (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://10.8.92.107:10080');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Credentials', true);

  res.cookie('abc', 'bbb')
  console.log(req.headers.cookie)
  res.send({aa:22})
})


app.get(`/*`, (req, res) => {
  let rr=req;
  delete require.cache[require.resolve('./test.json')]
  console.log(111,require('./test.json'))


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


  }


  res.end(`<a href='/aff'>ewrw</a><div>${JSON.stringify([
    req.domain,
    req.hostname,
    req.originalUrl,
    req.ip,
    req.ips,
    req.headers['user-agent'],
    req.protocol,
    req.headers['referer']
  ])}</div>`)

})
app.listen(1234, () => {
  console.log(`server started at localhost:${1234}`)
})
