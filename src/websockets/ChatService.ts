import { io } from '../http';

io.on('connect', (socket) => {
  socket.emit('chat_initialized', {
    message: 'Your chat was initialized'
  });
});