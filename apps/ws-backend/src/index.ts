import dotenv from "dotenv";
import path from "path";
dotenv.config({
  path: path.resolve(__dirname, "../../.env")
});
import { WebSocketServer,WebSocket } from "ws";
import jwt from "jsonwebtoken";

const ws = new WebSocketServer({ port :8080});

function checkuserexist(token : string) : string | null {
  const decode = jwt.verify(token, process.env.JWT_SECRET ||"");
  if ( typeof decode == "string") { 
    return null;
  }
  if(! decode || !decode.userId){
    return null;
  }
  return decode.userId;
}

interface UserSocket  {
  userId : string,
  room : string[],
  ws : WebSocket
} 

const users : UserSocket[] = [];


ws.on("connection",function connection(ws, request){
  try{
  const url = request.url;
  const queryParams = new URLSearchParams(url?.split('?')[1]);
  const token = queryParams.get("token") || "";
  const userId = checkuserexist(token);
  if(!userId){
    ws.close(1008, "Invalid token");
    return;
  }
  if(userId ==null){
    ws.close();
    return;
  }
  users.push({
    userId,
    room :[],
    ws
  })
  
  ws.on('message',function message(data){
   const parsesata = JSON.parse(data.toString());

   if(parsesata.type == "join_room") {
    const user = users.find(u => u.ws == ws);
    user?.room.push(parsesata.roomId);
   }
   if(parsesata.type == "leave_room") {
    const user = users.find(u=> u.ws == ws);
    if(!user) {
      return;
    
    }
    user.room = user?.room.filter(r => r === parsesata.room);
   }
   if(parsesata.type == "send_message") {
    const roomId = parsesata.roomId;
    const message = parsesata.message;

    users.forEach(u=> {
      if(u.room.includes(parsesata.roomId)){
        u.ws.send(JSON.stringify({
          type : "send_message",
          roomId : parsesata.roomId,
          message:parsesata.message,
        }))
      }
    })
   }
  });
  }catch(err){
    ws.close(1011, "Server error");
  }
})