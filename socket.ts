import * as socket from "socket.io";
import * as express from "express"


const app:any = express();
var server = app.listen(4321,()=>{
    console.log("Listening to port number")
})


//static files
app.use(express.static('source')) 
// app.get('*',function(res,req){
//     res.send('john cena');
// });
app.get('/',(req:any,res:any)=>{
    console.log("Jai Hind,Jai Bharath")
})


// socket setup

var io= socket(server)

io.on('connection',(socket)=>{
console.log("socket connection established ", socket.id)     


socket.on('chat',(data)=>{
    io.sockets.emit('chat',data)
})
})
