import Jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export function middleware(req : Request,res: Response,next : NextFunction) {
  const token = req.headers.authorization?.split(" ")[1];
  if(! token) {
    return res.status(401).json({ message: "Unauthorized 1" });
  }
  try {
    const decode = Jwt.verify(token, process.env.JWT_SECRET as string)as JwtPayload;
    req.userId = decode.userId;
    
    if (typeof decode === "string" || !decode.userId) {
      return res.status(401).json({ message: "Unauthorized 2" });
    }
    next();
  }catch(err) {
    return res.status(401).json({ message: "Unauthorized 3" });
  }

}