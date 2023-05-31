
export function connectComplete(msg) {
    console.log(`You recieved ${msg}.`)

    const auth = JSON.parse(msg)
    document.querySelector("#connectAuth").innerHTML = 'You are connected.'
    document.querySelector("#counterDisplay").innerHTML = 'Counter: ' + auth.totalClicks
}