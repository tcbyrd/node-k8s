const http = require('http')

http.createServer((req, res) => {
  res.end('foo')
}).listen(3000)
