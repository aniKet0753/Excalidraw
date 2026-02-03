import { Router, type Router as ExpressRouter } from "express";
import  {supabase}   from "../supabase";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router: ExpressRouter = Router();

router.post("/signup", async (req, res) => {
  try{
        
    const { email  , password,name } = req.body;
        const hash = await bcrypt.hash(password, 10);
           const { error } = await supabase
      .from("User")
      .insert([{ email, password: hash ,name}])
       
        if (error) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(200).json({ message: "User signed up successfully" });
    }catch(err: any) {
      return res.status(500).json({ message: "Internal Server Error" });

  }
});

router.post("/signin", async (req,res)=>{
  try {
    const {email , password} = req.body;
  const { data: user, error } = await supabase
      .from("User")
      .select("id , password")
      .eq("email", email)
      .single();    
      if (error || !user) {
  return res.status(401).json({ message: "User not found" });
}
const isMatch = await bcrypt.compare(
      password,
      user.password
    );      
             if (!isMatch) {
      return res.status(401).json({ message: "passeord is incorrect" });
    }

    const token = jwt.sign(
      { userId: user.id, email : email },
      process.env.JWT_SECRET || "",
       { expiresIn: '7d' }
    );
    

    return res.status(200).json({
      success: true,
      token,
      message: "Signin successful",
    });


  } catch (error) {
     console.error(error);
    res.status(500).json({ message: "Server error" });
  }
})


export default router;
