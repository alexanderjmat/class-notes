//There are certain techniques used to debug code in order to figure out what's going wrong 

//Types of errors:
//SyntaxError: when code syntax is miswritten
//ReferenceError: when you try to access an undefined variable
//TypeError: when you try to do something with a type that you can't

//Kinds of bugs:
//Error is thrown - easier to fix
//You don't get what you wanted - harder to fix


//Try/catch
//Try and catch create block scope ways of checking certain code for errors.
//try will run a selected block of code and catch will return a specific block of code is the code
//...within the try block results in an error
//finally will execute code regardless of whether there is an error or not

//Throw
//throw creates your own errors in JS


//Be careful of errors from decimal approximation. programming languages are weird with floating numbers



//JS Debugger is built into chrome 

const arr = [1, 2, 3, 4, 5, 6];

for (let i of arr) {
    console.log(i);
    console.log(i + i);
}


//adding 'debugger' within a function will automatically stop the code once that line is reached


//Error handling is different from debugging. debugging is working through errors for the programmer, and 
//...error handling is working through errors on the user end of things

try {
    functionDoesntExist();
} catch {
    console.log("error");
}

console.log("new stuff");


//catch can hold different parameters which can be important when your errors are about different things

try {
    fifuis();
} catch(e) {
    console.log(e);
    console.log("error");

}

//throwing an error in a try block saves that error message to the stack;
//throwing errors is useful for hiding errors from the user