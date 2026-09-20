const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;
const DEVNOTES = path.join(__dirname, 'DevNotes');
const LOG = path.join(__dirname, 'logs', 'venom.log');

const server = http.createServer((req, res) => {

   const msg =
    '[' + new Date().toISOString() + '] ' +
    'CAMADA 2 | MÉTODO: ' + req.method +
    ' | IP: ' + req.socket.remoteAddress +
    ' | Rota: ' + req.url + '\n';

    fs.appendFileSync(LOG, msg);

    console.log('🎭 VENOM CAMADA 2:', msg.trim());

    let filePath = path.join(DEVNOTES, req.url === '/' ? 'index.html' : req.url);

    filePath = path.normalize(filePath);

   fs.readFile(filePath, (err, data) => {

if (err) {
    console.log(
        '🚨 VENOM | MÉTODO: ' + req.method +
        ' | IP: ' + req.socket.remoteAddress +
        ' | Rota: ' + req.url +
        ' | STATUS: 404'
    );
    res.writeHead(404);
    res.end('Not Found');
    return;
}
        res.writeHead(200);
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log('========== VENOM CAMADA 2 - DEVNOTES ==========');
    console.log('Servidor ativo em http://localhost:' + PORT);
});