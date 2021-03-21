const http = require('http')

http.createServer((req, res) => {
  if (req.path === '/.github/version') {
    return res.end(process.env.DEPLOYED_SHA);
  }
  res.end('foo')
}).listen(3000)
