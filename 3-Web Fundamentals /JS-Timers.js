//Callback Functions



//Function arguments

//First Class Functions - In JS, a function is treated the same as any other datatype
//A JS Function is first class because it can: be passed as an arg to other functions, can be assigned a variable
//...and can return another function

function greet() {
    console.log("whats up");
}

function repeatThreeTimes(arg) {
    for (let i = 0; i <= 2; i++) {
        greet();
    }
}


//Functions in variables

//Functions can be assigned to a variable
//You can store functions in an array, object etc...


//Returning functions 
function giveBirth() {
    console.log("giving birth")
    return function cry() {
        return "wahh"
    }
}

function makeMultiplyFunc(num) {
    return function mult(x) {
        return num * x
    }
}
//returns the mult function num * x number of times


//Threading in JS

//JS is a single threaded language 
//A thread represents a single process running at some time
//JS can only run one process at a time
//An alert will interrupt function calls. It can't have the alert running at the same time as the function


//setTimeout

greet()
setTimeout(repeatThreeTimes, 3000); //waits 3000 miliseconds before running repeat function
//delays don't take into account line order 
//setInterval calls a function every set number of miliseconds
//clearInterval(id) stops an interval from calling a function


//Visualizing setTimeout()

//Call Stack - Javascript's to-do list, the task manager of threads to help JS figure out what to do next
//setTimeout doesnt make it to the callstack, but is imported using C++ from the browser


//Anonymous functions

//An anonymous function is nameless
//They are usually used as arguments within other functions
//Anonymous functions can be given a variable
