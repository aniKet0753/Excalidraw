"use client"
import { Butoom } from "@repo/ui/button"
import { redirect } from "next/dist/server/api-utils"
import { useEffect, useRef, useState } from "react"


export default function CanvasBoard() {
    const [rectangle, setrectangle]=useState(null)
    const [circle, setcircle]=useState(null)
    const canvasref = useRef<HTMLCanvasElement>(null)

//reactangle useeffect
  useEffect(() => {
    if(canvasref.current) {
      const canvas = canvasref.current
      const ctx= canvas.getContext("2d")
      let click = false;
      let startx=0;
      let starty=0;

      canvas.addEventListener("mousedown", (e)=>{
          click = true;
          startx = e.clientX;
          starty = e.clientY;

      })
      canvas.addEventListener("mouseup", (e)=>{
          click = false;
        
      })
      canvas.addEventListener("mousemove", (e)=>{
        if(click && ctx) {
            const width = e.clientX - startx;
            const height = e.clientY - starty;
            ctx.clearRect(0,0,canvas.width, canvas.height)
            ctx.strokeRect(startx, starty, width, height)
            
        }
        
      })

    }
  }, [canvasref]);
//circle useeffect

  return (
    <div style={{backgroundColor:"blue"}}>
      <canvas style={{backgroundColor:"white", color:"white"}} ref={canvasref} height={1000} width={1500}></canvas>
    </div>
  )
}