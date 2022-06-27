//let and const



//reviewing var

//var used to be the only way to make a variable 
//var can reassign and redeclare
var song = 'cry me a river';
//global scope variables are added to the global window object
function song() {
    var song = 'cry me a river'
}
//var can be accessed from outside its scope unlike let/const


//let

//let is a new type of variable that can be reassigned but not redeclared
//let doesnt save to the global window object
//let is block-scoped which means it only exists only inside its code block


//const

//const cannot be reassigned OR redeclared
//const is block-scoped just like let


//variable hoisting 

//variable hoisting is when a declaration is run separately from initialization
//let variables are not hoisted 