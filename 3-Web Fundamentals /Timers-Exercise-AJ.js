//Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds 
//decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.
function countdown(num) {
    let newNum = num;
    if (newNum > 0) {
        setTimeout(function () {
            countdown(newNum);
        }, 1000)
        newNum -= 1
        if (newNum >= 1) console.log(newNum);
        if (newNum == 0) console.log("DONE!");
    }
}

//Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds 
//and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, 
//stop the timer and console.log the number of tries it took before we found a number greater than .75.

//Not sure whether or not the terminal number should count as a try, so I commented "1" next to the counter
//...to account for both possibilities

let counter = 0; //or 1 if you want the terminal number to count as a try
function randomGame() {
    let num = Math.random();
    if (num <= 0.75) {
        setTimeout(function() {
            randomGame()
        }, 1000)
        console.log(num);
        counter++;
    }
    if (num > 0.75) {
        console.log(num);
        console.log(counter);
    }
}









