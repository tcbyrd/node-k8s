const http = require('http')

http.createServer((req, res) => {
  if (req.url === '/.github/version') {
    return res.end(process.env.GITHUB_SHA);
  }
  res.end('Testing the GitHub flow!')
}).listen(3000)
