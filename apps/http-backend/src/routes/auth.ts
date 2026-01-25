import { Router, type Router as ExpressRouter } from "express";
import  {supabase}   from "../supabase";
import bcrypt from "bcrypt";

const router: ExpressRouter = Router();

router.post("/signup", async (req, res) => {
  try{
        
    const { email  , password } = req.body;
        const hash = await bcrypt.hash(password, 10);
           const { error } = await supabase
      .from("users")
      .insert([{ email, password_hash: hash }]);
        if (error) {
      return res.status(400).json({ message: error.message });
    }

    return res.status(200).json({ message: "User signed up successfully" });
    }catch(err: any) {
      return res.status(500).json({ message: "Internal Server Error" });

  }
});

router.post("/signin", (req,res)=>{
  //find user in db and verify password
// return jwt token on successfull login
})


export default router;
