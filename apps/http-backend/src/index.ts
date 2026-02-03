import dotenv from "dotenv";
import path from "path";
dotenv.config({path:path.resolve(process.cwd(),"../.env")})
import express from "express";
import signuprouter from "./routes/auth"
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());  
app.use("/api",signuprouter)

app.listen(3001, () =>{
  console.log("HTTP server running on http://localhost:3001");
})