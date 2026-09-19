const http = require('http'), fs = require('fs'), path = require('path');
const server = http.createServer((req, res) => { const msg = '[' + new Date().toISOString() + '] IP: ' + req.socket.remoteAddress + ' Rota: ' + req.url + '\n'; fs.appendFileSync(path.join(__dirname, 'logs', 'venom.log'), msg); console.log('⚠️ ALERTA:', msg.trim()); res.writeHead(401); res.end('Unauthorized'); });
server.listen(3000, () => console.log('========== PROJECT VENOM INICIADO (JS) =========='));
