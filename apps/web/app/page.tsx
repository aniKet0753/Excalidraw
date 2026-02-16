"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@repo/ui/navbar";
import { useRouter } from "next/navigation";
import { Input } from "@repo/ui/input";  

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ roomId, setRoomId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/");
  };

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",}}>
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <main style={{ backgroundColor:"#667eea",  minHeight: "100vh",  flexDirection: "column",display: "flex",}}>
      <div>
        <Navbar isLoggedIn={isLoggedIn} onSignupClick={() => router.push("/signup")} onSigninClick={() => router.push("/signin")} onLogoutClick={handleLogout}/>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
        <div style={{ padding: "20px", borderRadius: "10px",textAlign:"center",}}>
          <h1 style={{ fontFamily: "'Inter', system-ui, sans-serif",fontSize: "clamp(48px, 6vw, 70px)",
    fontWeight: 800,
    lineHeight: 1.1,
    marginTop: "45px",
    color: "white",
    maxWidth: "800px",}}>
            Your{" "}<span style={{color:"#f2ff00",marginLeft:"8px",textShadow: `0 0 4px rgba(255, 242, 0, 0.9), 0 0 12px rgba(255, 251, 0, 0.7), 0 0 28px rgba(255, 251, 0, 0.4), 0 0 50px rgba(255,0,0,0.2)`, borderColor:"black"}}>Ideas</span>
            Sketched to <span>Life</span>
            {isLoggedIn && " You're logged in!"}
          </h1>
          {!isLoggedIn && (
            <p style={{fontFamily:"Roboto", fontSize:"30px"}}>Please sign up or sign in to get started.</p>
          )}
          




        </div>
        <div style={{ width: "600px",alignSelf: "stretch",position: "relative",borderRadius: "15px",overflow: "hidden",boxShadow: "0   rgba(0,0,0,0.2)", marginTop:'50px', marginRight:"20px", backgroundColor:"pink"}}>
         <Input  placeholder="Enter room id to join " type="text" onChange={(e) =>setRoomId(e.target.value)} value={roomId}/>
        </div>
          
      </div>
    </main>
  );
}