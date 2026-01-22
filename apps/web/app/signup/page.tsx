"use client";
import { Card } from "@repo/ui/card";
import { Butoom } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import axios from "axios";
import { useState } from "react";


export default  function signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  async function handleSignup() {
    try {
      const res = await axios.post("http://localhost:3001/api/signup", {
        email,
        password,
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#4797ff",}}>
      <div>
        <main style={{  height: "700px", borderColor:"gray", borderRadius:"10px",width:"900px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f3f4f6",}}>
          <div style={{ background: "#f3f4f6", fontFamily:"Roboto" }}>
            <Card title="Signup page" />
            <div style={{ marginTop: "16px", textAlign: "center" }}>
              <Input  placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
              <br />
              <Input placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
              <br />
              <Butoom onClick={handleSignup} label="SignUP" />
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
