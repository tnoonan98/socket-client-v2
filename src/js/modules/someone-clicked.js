
export function someoneClicked(msg) {
    console.log(`You recieved ${msg}.`)

    const count = JSON.parse(msg)

    document.querySelector("#counterDisplay").innerHTML = 'Counter: ' + count.totalClicks
    document.querySelector("#whoClicked").innerHTML = count.whoClicked + ' Clicked!!!'
}