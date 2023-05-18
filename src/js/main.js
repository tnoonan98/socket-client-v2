// Import our custom JS
//import './modules/easterEgg.js'
import { addTwoNumbers, displayEasterEggOnWednesday} from './modules/easterEgg';
//import { addTwoNumbers } from './modules/easterEgg';
//import * as egg from './modules/easterEgg'
import { io } from 'socket.io-client'

// Import our custom CSS
import '../scss/styles.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Import only the Bootstrap components we need
import { Popover } from 'bootstrap';

const socket = io("ws://172.17.103.101:3000")

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })

  //alert(addTwoNumbers(5, 3))
  displayEasterEggOnWednesday()

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
  })

  socket.on("someoneClicked", (msg) => {
    console.log(`You recieved ${msg}.`)

    const count = JSON.parse(msg)

    document.querySelector("#counterDisplay").innerHTML = 'Counter: ' + count.totalClicks

  })


  document.querySelector('#btn1').addEventListener("click", () => {
  socket.emit("click")
})

document.querySelector('#reset').addEventListener("click", () => {
  socket.emit("resetClicks")
})
 