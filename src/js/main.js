import { io } from 'socket.io-client'
import { sendCustomName } from './modules/sendCustomName.js'

import '../scss/styles.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

const socket = io("ws://172.17.40.2:3000")
//const socket = io("ws://192.168.56.1:3000")
export {socket}

socket.on("connectComplete", (msg) => {
  console.log(`You recieved ${msg}.`)

  const auth = JSON.parse(msg)
  document.querySelector("#connectAuth").innerHTML = 'You are connected.'
  document.querySelector("#counterDisplay").innerHTML = 'Counter: ' + auth.totalClicks

})
socket.on("someoneResetClicks", (msg) => {
  console.log(`You recieved ${msg}.`)
  const count = JSON.parse(msg)

  document.querySelector("#counterDisplay").innerHTML = 'Counter: ' + count.totalClicks
  document.querySelector("#whoClicked").innerHTML = count.whoClicked + ' Reset!!!'
})

socket.on("someoneClicked", (msg) => {
  console.log(`You recieved ${msg}.`)

  const count = JSON.parse(msg)

  document.querySelector("#counterDisplay").innerHTML = 'Counter: ' + count.totalClicks
  document.querySelector("#whoClicked").innerHTML = count.whoClicked + ' Clicked!!!'

})

/*function sendCustomName() {
  const name = document.getElementById("chosenName").value
  
  const payload = {
    customName: name
  }

  const payloadAsString = JSON.stringify(payload)

  console.log("nameUpdate", payloadAsString)
  socket.emit("nameUpdate", payloadAsString)
}*/

document.querySelector('#changeName').addEventListener("click", () => {
  sendCustomName()
  document.querySelector('#changeName').disabled = true
})

document.querySelector('#btn1').addEventListener("click", () => {
  socket.emit("click")
})

document.querySelector('#reset').addEventListener("click", () => {
  socket.emit("resetClicks")
})
