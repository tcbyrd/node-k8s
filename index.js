const http = require('http')

http.createServer((req, res) => {
  res.end('Change something?!')
}).listen(3000)
