const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = './html' + req.url + '.html';

    if (req.url === '/') {
        filePath = './html/home.html';
    }

     fs.readFile(filePath, 'utf8', (err, data) => {
        try {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        } catch (error) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('<h1>404 Not Found</h1><p>La página solicitada no existe.</p>');
            return res.end();
        }
    });
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
