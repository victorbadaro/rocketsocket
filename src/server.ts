import { server } from "./http";
import './websockets/ChatService';

server.listen(3000, () => console.log('Server is now running on port 3000'));