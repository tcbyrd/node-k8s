const http = require('http')

http.createServer((req, res) => {
  if (req.url === '/.github/version') {
    return res.end(process.env.GITHUB_SHA);
  }
  res.end('foo')
}).listen(3000)
