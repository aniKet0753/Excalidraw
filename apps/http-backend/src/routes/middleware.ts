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
  }catch(err:any) {
       if (err.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Token expired. Please login again.",
        code: "TOKEN_EXPIRED"
      });
    }
    return res.status(401).json({
      message: "Invalid token",
      code: "INVALID_TOKEN"
    });
  }

}