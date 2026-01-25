"use client";
import { Card } from "@repo/ui/card";
import { Butoom } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import axios from "axios";
import { useState } from "react";
import {useRouter} from "next/navigation";

export default  function signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setsucess] = useState("");
  const [error, seterror] = useState("");
  const router = useRouter();
  
  async function handleSignup() {
    setsucess("");
    seterror("");
    if(!email || !password){
      seterror("please fill all fields");
      return;
    }
    try {
      const res = await axios.post("http://localhost:3001/api/signup", {
        email,
        password,
      });
      setsucess("Signup successful! You can now Signin.");
      setTimeout(() => {
        router.push('/signin');
      },2000);
      setEmail("");// clear input fields
      setPassword("");// clear input fields
    } catch (err) {
      seterror("Signup failed. Please try again.");
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
              {success && (
                <p style={{ color: "green", marginBottom: "8px" }}>{success}</p>)}
              {error && (
                <p style={{ color: "red", marginBottom: "8px" }}>{error}</p>)}
              <Butoom onClick={handleSignup} label="SignUP" />
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
