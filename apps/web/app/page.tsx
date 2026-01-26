"use client";

import { useState } from "react";
import { Card } from "@repo/ui/card";
import { Input } from "@repo/ui/input";
import { Butoom } from "@repo/ui/button";
import { Navbar } from "@repo/ui/navbar";
import {  useRouter } from "next/navigation";



export default function Home() {
    const router = useRouter();

  return <main>
    <div>
      <Navbar onSignupClick={()=> router.push("/signup")}/>
    </div>
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <div style={{backgroundColor:"yellow"}}>
        <h1 style={{fontFamily:"Roboto"}}>WELCOME TO EXCALIDEAW</h1>
      </div>
      <div style={{backgroundColor:"red"}}>
        tyjtjtjt
      </div>
    </div>
  </main>
}