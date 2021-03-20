const http = require('http')

http.createServer((req, res) => {
  res.end('Test after moving to docker login.')
}).listen(3000)
