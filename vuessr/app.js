var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/t1', function (req, res) {

  res.send('hello world')

  var app2 = express()
  app2.get('/',function (req, res) {
    res.send('333')
  })
  app2.listen(3001);
})
var multer  = require('multer')
// 通过 filename 属性定制
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder);    // 保存的路径，备注：需要自己创建
  },
  filename: function (req, file, cb) {
    // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
    cb(null, file.fieldname + '-' + Date.now()+'.json');
  }
});
var uploadFolder = './uploads/';
// 通过 storage 选项来对 上传行为 进行定制化
var upload = multer({ storage: storage })

app.post('/profile', upload.single('ssrjson'), function (req, res, next) {
  console.log(req.file)
  res.send(req.file);
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})



var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })

app.listen(3000);
