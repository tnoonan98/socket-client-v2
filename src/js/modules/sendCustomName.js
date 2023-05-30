import { socket } from "../main.js"

export function sendCustomName() {
    const name = document.getElementById("chosenName").value
    
    const payload = {
      customName: name
    }
  
    const payloadAsString = JSON.stringify(payload)
  
    console.log("nameUpdate", payloadAsString)
    socket.emit("nameUpdate", payloadAsString)
  }