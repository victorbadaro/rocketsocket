import express from 'express';
import { createServer } from 'node:http';
import path from 'node:path';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, '..', 'public')));

io.on('connection', (socket) => {
  console.log('Socket', socket.id);
});

server.listen(3000, () => console.log('Server is now running on port 3000'));