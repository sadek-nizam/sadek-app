var http = require('http')
 var count =0;
var onRequest = function (req,res)
{ count ++
  console.log('new request')
   res.writeHead(200,{'Content-Type':'text/plain'})
   res.write('Hello,world!\n')
   res.write('you are visitor number ' + count)
   res.end()
}
var server = http.createServer(onRequest)

server.listen(2000)
console.log('Server stsrted at port 1500')
