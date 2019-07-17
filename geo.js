var http = require('http');
var static = require('node-static');
var app = http.createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs')
// define port
var port = 8080;

// make html, js & css files accessible
http.createServer(function(req , res) {
    res.writeHead(200 , {'content-type' : 'text/html'})
var myReadStream = fs.createReadStream(__dirname + '/geolocation.html' , 'utf8');
myReadStream.pipe(res);
})
// serve files on request
function handler(request, response) {
	request.addListener('end', function() {
		files.serve(request, response);
	});
}

// listen for incoming connections from client
io.sockets.on('connection', function (socket) {

  // start listening for coords
  socket.on('send:coords', function (data) {

  	// broadcast your coordinates to everyone except you
  	socket.broadcast.emit('load:coords', data);
  });
});

// starts app on specified port
app.listen(port);
console.log('Your server goes on localhost:' + port);

