import express from 'express';
import {createServer} from 'node:http';
import {PORT} from "./config/serverConfig.js";
import cors from 'cors';
import apiRouter from "./routes/index.js";
import {Server} from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin:'*',
        methods:['GET', 'POST']
    }
});


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


io.on('connection', (socket)=>{
    console.log('a user connected');
})


app.use('/api', apiRouter);

app.get('/ping', (req, res)=>{
   return res.json({message: 'pong'})
})

server.listen(PORT, ()=>{
    console.log(`server is running on PORT: ${PORT}`);
})