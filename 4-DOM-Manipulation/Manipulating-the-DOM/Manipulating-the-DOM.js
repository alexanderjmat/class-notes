//innerText

//innerText access the text within a selected element 
//innerText = "x" -> changes the existing text of selected element to "x"
//innerText can take other methods, like toUpperCase()
//textContent is another similar but slightly different property
//textContent is more inclusive of different kinds of text, such as scripts
//innerText shows only publically displayed text 


//innerHTML

//innerHTML is a property that lets you access HTML of a given element
//you can dynamically add elements with innerHTML
//has to be changed using strings which can be unoptimal 


//Styling

//the style property allows you to see and modify CSS INLINE styling
//the style object list displays all styles as empty strings for anything other than INLINE styles
//in JS you HAVE to camelCase css properties or they will return a reference error


//Changing multiple elements 

//You can change multiple elements at the same time using the DOM
//You cannot change an entire node list's properties with a traditional command - you have to loop through them
//Put script at the end of the HTML body (all the html needs to run so the script can read it)


//getAttribute and setAttribute

//This functions allow you to access HTML attributes
//They take strings as input to access properties 
//setAttribute(x, y) takes two inputs, x and y, where x is the attribute, and y is how it should change
//setAttribute can be used to change/set class name


//Direct access to attributes

//some attributes can be directly accessed by element.idname 
//id can be directly accessed
//an important attribute that can be directly accessed is value (value from forms and such)


//Manipulating classes

//Classes are one of the most common attributes to manipulate
//className gives a string representation of a class
//element.className += ' newclass';
//classList gives an array representation of a class
//methods, add, remove, toggle (toggle returns a true/false boolean)
//classes are like their own DOM


//Creating new elements
//New elements are created via the document.createElement('x') function where 'x' is an element type
//new elements can be appended to the dom using element.append("elementyouwanttoappend")
//multiple elements can be appended at once
//append is not supported in internet explorer 
//prepend will add the element to the top of the selected element 


//Removing elements
//Done using the removeChild method (old way) - parent.removeChild(child) (must also call the parent)
//..or new way - element.remove()


//Parent child siblings
//The DOM organizes using a tree structure of parents, children, and siblings
//Sometimes you want to access specific lines of HTML depending on these relationships
//parent - element.parentElement
//child - element.children; element.firstElementChild; element.lastElementChild
//These can be linked to access grandchildren/grandparents
//siblings - element.nextElementSibling; element.previousElementSibling


//Nodes vs elements 
//Everything in the DOM is a node, but some notes are not HTML elements, but can be text or comments