const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("content-Type", "text/HTML");
    res.write("<h1>Welcome to home page.</h1>");
    res.end();
  } else if (req.url === "/source-code") {
    res.setHeader("content-Type", "text/plain");
    res.write("This is source code");
    res.end();
  } else if (req.url === "/contact") {
    res.setHeader("content-Type", "text/HTML");
    res.write("<h1>Call me 🤙❤️</h1>");
    res.end();
  }
});

// behind the scene, its' an eventemitter.
server.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`);
});
