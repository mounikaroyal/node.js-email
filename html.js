const http = require('http')
const fs = require('fs')

http.createServer(function(req , res) {
    res.writeHead(200 , {'content-type' : 'text/html'})
    var myReadStream = fs.createReadStream(__dirname + '/registerform.html' , 'utf8');
    myReadStream.pipe(res);
}).listen(5500)
console.log('server running at http://127.0.0.21:5500/')
