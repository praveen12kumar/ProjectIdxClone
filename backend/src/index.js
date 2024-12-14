import express from 'express';
import {createServer} from 'node:http';
import {PORT} from "./config/serverConfig.js";
import cors from 'cors';
import apiRouter from "./routes/index.js";
import {Server} from 'socket.io';
import chokidar from 'chokidar'
import path from 'path';


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

const editorNamespace = io.of('/editor');

editorNamespace.on("connection", (socket)=>{
    console.log("editor connected");

    // somehow we will get the project id from frontend
    let projectId = "123456789";

    if(projectId){
        const watcher = chokidar.watch(`./projects/${projectId}`,{
            ignored: (path) => path.includes("node_modules"),
            persistent: true,  // to keep the watcher alive or running state till the app is alive
            awaitWriteFinish:{
                stabilityThreshold: 2000, // insure stability of the files before triggering an event
            },
            ignoreInitial: true, // ignore the initial files in the directory

        });

        watcher.on("all", (event, path)=>{
            console.log("file changed", event, path);
        })
    }

    // socket provides an event handler like DOM events, here "message" is an event
    socket.on("message", (data)=>{
        console.log("got a message event:", data);
        const message = JSON.parse(data.toString());
    });

    socket.on("disconnect", async()=>{
        await watcher.close();
        console.log("editor disconnected");
    })
})



server.listen(PORT, ()=>{
    console.log(`server is running on PORT: ${PORT}`);
})