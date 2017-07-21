const io = require('socket.io')(1234)
io.on('connection', function (socket) {
  io.sockets.emit('hi', 'everyone');
  io.emit('hi', 'everyone'); // short form

  // 连接上就推送, 正在投票的 作品
  console.log(3232)
  // io.emit('this', { will: 'be received by everyone'});
  socket.broadcast.emit('user connected');
  socket.emit('news', { hello: 'world' });

  // 大屏幕，手机弹幕
  socket.on('bullet emit', function (str) {
    console.info('bullet emit', str);
    // socket.broadcast.emit('hi2');
    // io.emit('an event sent to all connected clients');
    socket.broadcast.emit('bullet action', '12314');
    socket.emit('user connected','ewe');
    io.emit('some event', { for: 'everyone' });
    // 推送到评委的手机端
    // socket.broadcast.emit('bullet reserve', currentWorksList);
    // socket.send('hi');
  });

  socket.on('bullet action', function (str) {
    // socket.broadcast.emit('hi');
    // console.info('bullet emit', str);
    //
    // // 推送到评委的手机端
    // socket.broadcast.emit('bullet reserve', currentWorksList);
  });
  socket.on('connect', function (str) {
    // socket.broadcast.emit('hi');
    console.info('connect', str);
    //
    // // 推送到评委的手机端
    // socket.broadcast.emit('bullet reserve', currentWorksList);
  });


});
