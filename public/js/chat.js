const socket = io("http://localhost:3000");

socket.on('chat_initialized', (data) => {
  console.log(data);
});