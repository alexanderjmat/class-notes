//Events introduction

//Javascript events - actions that occur in the browser, most commonly the user but sometimes the browser itself


//eventListener 

//three main kinds, you should only use one
//when x event occurs, do y - basic structure 
//way one: inline html function - on"command"
//way two: in JS as a default function


//addEventListener 

//addEventListener is the best method for adding events in JS
//element.addEventListener('event', function () {
//    some code
//})
//addEventListener is optimal because you can more easily remove it, and because you can have two click listeners on one button


//Loading events

//document.addEventListener("DOMContentLoaded", function () {
    //code here
//}) will ensure that the DOM loads


//Event Object Intro

//instead of a callback to addEventListener, we get access to a special object as a parameter called the event object
//Inside the event object - target, what element is the target of the ecent
//pageX/pageY - where on the page did event occur
//key - what key was pressed that triggered the event 
//preventDefault() - a function used to prevent the default behavior of the event


//Form submit

//onSubmit/'submit'
//Some forms submit and refresh the page, and some submit and have javascript listen for an event
//event.preventDefault() is used to stop the default behavior of an event


//key events

//key events are events that are trigged when a user interacts with the keyboard
//keypress - responds when a user presses a key that triggers a visible output
//the key properties is important
//keydown - responds when a user presses ANY key whatsoever
//keyup - same thing but logs when the key is released


//Multiple event listeners 

//for common that you want multiple event listeners
//you can do this by using a loop

// const removeButtons = document.querySelectorAll('lu button');

// for (let btn of removeButtons) {
//     btn.addEventListener('click', function(e)) {
//         e.target.parentElement.remove();
//     }
// }


//event delegation

//event delegation is when the parent element of some code is a delegate, where
//...a listener event looks for anything happening within that parent element


//Data attributes

//allows you to store metadata that you don't want the user to see
//elements can be given a data attribute using 'data-x' where x is some text