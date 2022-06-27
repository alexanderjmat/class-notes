// Select the section with an id of container without using querySelector.
let first = document.getElementById('container');
// Select the section with an id of container using querySelector.
let second = document.querySelector('#container');
// Select all of the list items with a class of “second”.
let third = document.querySelectorAll('.second')
// Select a list item with a class of third, but only the list item inside of the ol tag.
let fourth = document.querySelector("ol > .third")
// Give the section with an id of container the text “Hello!”.
let fifth = second.append("Hello!")
// Add the class main to the div with a class of footer.
let sixth = document.querySelector(".footer")
sixth.classList.add('main');
// Remove the class main on the div with a class of footer.
let seventh = sixth.classList.remove('main')
// Create a new li element.
let eighth = document.createElement('li')
// Give the li the text “four”.
let ninth = eighth.innerText = 'four';
// Append the li to the ul element.
let tenth = document.querySelector('ul');
let tenthFirst = tenth.append(eighth);
// Loop over all of the lis inside the ol tag and give them a background color of “green”.
let eleventh = document.querySelectorAll('ol > li');
for (let li of eleventh) {
    li.style.backgroundColor = 'green';
}
// Remove the div with a class of footer
let twelfth = document.querySelector('div.footer');
twelfth.remove();


