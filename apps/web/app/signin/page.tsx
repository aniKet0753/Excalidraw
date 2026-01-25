"use client";

import { useState } from "react";
import { Card } from "@repo/ui/card";
import { Butoom } from "@repo/ui/button";
import { Input } from "@repo/ui/input";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignin() {
    console.log({ email, password });
    
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4797ff",
      }}
    >
 <Card title="Signup page" />
         <div style={{ textAlign: "center" }}>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <Butoom label="Sign In" onClick={handleSignin} />
        </div>
    
    </main>
  );
}
