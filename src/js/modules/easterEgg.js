console.log('Easter Egg')

export const addTwoNumbers = (num1, num2) => {
    return num1 + num2
} 

export const displayEasterEggOnWednesday = () => {
    // returns current date time
    const date = new Date();

    // true on wednesday
    if(date.getDay() === 3) {
        document.querySelector('body').style.backgroundColor = 'blue'
    }
    
}