const http = require('http')

http.createServer((req, res) => {
  res.end('Does this work now?!')
}).listen(3000)
