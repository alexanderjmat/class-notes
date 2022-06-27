//Introduction to the DOM

//The DOM is what allows Javascript to interact with HTML/CSS to make websites interactive


//What is the DOM actually?

//DOM - Document Object Model
//An object representation of HTML in Javascript memory
//When a web page is loaded, the browser creates the DOM for that specific page
//This lets webpages be dynamic and interactive
//The structure of the DOM uses something called a tree, where the topmost node is the document object


//Exploring the Document

//The document object is available on any webpage
//It is the starting point for access to the DOM
//With the document you can find elements, update elements, change properties, and listen for events
//Document has many, many properties
console.dir(document); //Displays document in object form
//The document contains references to every single HTML element 


//getElementById

//JS has many methods for selecting elements in the DOM, and we will start with getElementById
//document.getElementById("x") will select the first element matching the id name
//You can save document declarations to variables
//By default, document methods return HTML Element objects, which are specialized to the DOM


//getElementsByTagName

//getElementsByTagName accepts a string that is equivalent to an element in the DOM
//it returns a list of all elements that match the string passed into the function
//Elements can be accessed via their indices just like array elements, but array methods wouldnt work


//getElementsByClassName

//It accepts a string which is the class name of an element in the DOM


//querySelector

//querySelect selects a valid CSS selector
//querySelect is extremely useful - it is the one you should use all the time
//document.querySelector(x) -> where x is a valid css selector (ex. h1.div.p)
//querySelectorAll(x) -> returns all elements that correspond to input


//Searching within an element

//You can select an element and then search within it
//You can save a query selection to a variable and do a query search within that variable. 
