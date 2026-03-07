"use client"
import { Butoom } from "@repo/ui/button"
import { redirect } from "next/dist/server/api-utils"
import { useEffect, useRef, useState } from "react"


export default function CanvasBoard() {
    const [tool,settool ]= useState("rectangle")
    const canvasref = useRef<HTMLCanvasElement>(null)

  //reactangle useeffect
  useEffect(() => {
    let snapshot: ImageData | null = null
    if(canvasref.current) {
      const canvas = canvasref.current
      const ctx= canvas.getContext("2d")
      let click = false;
      let startx=0;
      let starty=0;

      canvas.addEventListener("mousedown", (e)=>{
          click = true;
          snapshot = ctx?.getImageData(0,0,canvas.width,canvas.height) || null
          const rect = canvas.getBoundingClientRect()
          startx = e.clientX - rect.left
          starty = e.clientY - rect.top
            if(tool === "draw" && ctx){
            ctx.beginPath() 
            ctx.moveTo(startx, starty)
          }
      })
      canvas.addEventListener("mouseup", (e)=>{
          click = false; 
      })
      canvas.addEventListener("mousemove", (e)=>{
      const rect = canvas.getBoundingClientRect()

      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
        if(tool ==="rectangle") {
        if(click && ctx) {
            const width = mouseX - startx;
            const height = mouseY - starty;
        if(snapshot){ ctx.putImageData(snapshot,0,0) }
          ctx.strokeRect(startx, starty, width, height) 
        }
      }
        if(tool === "circle"){
          if (click && ctx ) {
            const width = mouseX - startx;
            const height = mouseY - starty;
            const radius = Math.sqrt(width * width + height * height)
         if(snapshot){
           ctx.putImageData(snapshot,0,0)
           }            
            ctx.beginPath()
            ctx.arc(startx, starty, radius, 0, Math.PI * 2)
            ctx.stroke()
          }
        }
        if(tool ==="arrow") {
          if(click && ctx ) {
        if(snapshot){
            ctx.putImageData(snapshot,0,0)
          }
            ctx.beginPath()
            ctx.moveTo(startx, starty)
            ctx.lineTo(mouseX, mouseY)
            ctx.stroke()
          }
        }
        if(tool === "draw"){
          if(ctx && click) {
             ctx.lineWidth = 2
             ctx.strokeStyle = "black"

            ctx.lineTo(mouseX, mouseY)
          if(snapshot){
            ctx.putImageData(snapshot,0,0)
             }
             ctx.stroke()
          }
        } 
      })
    }
  }, [tool]);
 

//circle useeffect
  return (
    <div style={{backgroundColor:"blue", display:"flex"}}>
      <button onClick={()=>{ settool("rectangle") }} >rectangle</button>
      <button onClick={()=>{ settool("circle")}} >circle</button>
      <button onClick={()=>{  settool("arrow") }} >arrow</button>
      <button onClick={()=> { settool("draw")}} >Draw</button>
      <canvas style={{backgroundColor:"white", color:"white"}} ref={canvasref} height={1000} width={1500}></canvas>
    </div>
  )
}