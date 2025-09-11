const WebSocket = require('ws');
const clients = new Set();

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', socket => {
  clients.add(socket);

  socket.on('message', msg => {
    for (let client of clients) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg);
      }
    }
  });

  socket.on('close', () => clients.delete(socket));
});

console.log("WebSocket server running on ws://localhost:8080");
