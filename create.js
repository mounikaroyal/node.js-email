var http = require('http')
var server = http.createServer(function (req, res) {
console.log('req was made: ' + req.url)
res.writeHead(200, {'content-type': 'text/plain'})
res.end("hello from Royalrun");
})
server.listen(3000)
console.log('server running at http://127.0.0.21:3000/' );