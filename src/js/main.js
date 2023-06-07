import { io } from 'socket.io-client'
import { sendCustomName } from './modules/send-custom-name.js'
import { someoneResetClicks } from './modules/someone-reset-clicks.js'
import { someoneClicked } from './modules/someone-clicked.js'

import '../scss/styles.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { connectComplete } from './modules/connect-complete.js'
// IP Address of your socket server
const socket = io("https://socketserver.battisti.repl.co")
//
socket.on("connectComplete", (msg) => {
  connectComplete(msg)
})
// 
socket.on("someoneResetClicks", (msg) => {
  someoneResetClicks(msg)
})

socket.on("someoneClicked", (msg) => {
  someoneClicked(msg)

})

document.querySelector('#changeName').addEventListener("click", () => {
  const payloadString = sendCustomName()
  socket.emit("nameUpdate", payloadString)
})

document.querySelector('#btn1').addEventListener("click", () => {
  socket.emit("click")
})

document.querySelector('#reset').addEventListener("click", () => {
  socket.emit("resetClicks")
})
