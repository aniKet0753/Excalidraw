import { WebSocketServer } from "ws";
import jwt from "jsonwebtoken";

const ws = new WebSocketServer({ port :8080});

ws.on("connection",function connection(ws, request){
  try{
  const url = request.url;
  const queryParams = new URLSearchParams(url?.split('?')[1]);
  const token = queryParams.get("token") || "";
  const decode = jwt.verify(token, process.env.JWT_SECRET ||"");
  if ( typeof decode == "string") { 
    ws.close();
    return;
  }
  if(! decode || !decode.userId){
    ws.close();
    return;
  }
  ws.on('message',function message(data){
   ws.send("hellow from server");
  });
  }catch(err){
    ws.close();
  }
})