"use client";

import { useState } from "react";
import { Card } from "@repo/ui/card";
import { Butoom } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(""); 
  const router = useRouter();


  function handleSignin() {
    setEmail("");
    setPassword("");
    if (!email || ! password) {
      alert("please fill all fields");
      return;
    }
  const res = axios.post("http://localhost:3001/api/signin", {
    email:email,
    password:password,
  });
  res.then((response) => {
    if (response.data.success) {
      setSuccess("Signin successful! Redirecting to home page...");
      setTimeout(() => {
        router.push("/")
      }, 3000);
      setEmail("");
      setPassword("");
    } else {
      alert("Signin failed. Please try again.");
    } }).catch((error) => {
      alert("Signin failed. Please try again.");
    });
    
  }

  return (
   <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#47f0ff",}}>
      <div>
        <main style={{  height: "700px", borderColor:"gray", borderRadius:"10px",width:"900px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f3f4f6",}}>
          <div style={{ background: "#f3f4f6", fontFamily:"Roboto" }}>
            <Card title="SignIn Page" />
            <div style={{ marginTop: "16px", textAlign: "center" }}>
              <Input  placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
              <br />
              <Input placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
              <br />
               {success && (
                <p style={{ color: "green", marginBottom: "8px" }}>{success}</p>)}
              {error && (
                <p style={{ color: "red", marginBottom: "8px" }}>{error}</p>)}
              <Butoom onClick={handleSignin}  label="SignIN" />
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
