const http = require('http');

const PORT = 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end("Hello from VS Code Cloud App 🚀");
}).listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});