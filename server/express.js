var express = require('express');
var app = express();
// app.set('trust proxy', true)
app.get(`/*`, (req, res) => {
  let rr=req;


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
