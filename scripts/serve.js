import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const PORT = 8000;
const FILE = 'resume.html';

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(FILE, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end('Resume file not found. Please ensure it is rendered.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  } else {
    // Serve static assets if needed, or 404
    // For simplicity, we just serve 404 for now, unless we need to serve CSS/images relative to html?
    // The resume usually embeds CSS, but if it links to external files we might need to serve them.
    // The rendered resume by resumed usually embeds everything or uses absolute links?
    // Let's check the output html content if possible. 
    // But for now, simple serving is enough.
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`Serving at http://localhost:${PORT}/`);
});
