import { useEffect, useState } from "react"
import { WS_URl } from "../app/room/config"

export function usesocket(roomId?: string) {
  const [loading, setLoading] = useState(true)
  const [socket, setSocket] = useState<WebSocket | null>(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
       if (!token) {
      setLoading(false)
      return
    }

    const ws = new WebSocket(`${WS_URl}?token=${token}`)

    ws.onopen = () => {
      setSocket(ws)
      setLoading(false)
      if (roomId) {
        ws.send(JSON.stringify({
          type: "join_room",
          roomId
        }))
      }
    }

    ws.onerror = () => setLoading(false)

    return () => ws.close()
  }, [roomId])//Dependency array when roomId chages it will create new socket connection and join the new room

  return { socket, loading }
}