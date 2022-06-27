//This is an incomplete draft. I intend to finish it later but I am having some issues that...
//...I need to come back to and figure out

let value = document.querySelector('.input');
let tasks = document.querySelector('.tasks');
let form = document.querySelector('.main')


tasks.addEventListener('click', function(e) {
    let item = e.target;
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
})

//still trying to figure out how to update local storage to remove items on refresh

tasks.addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target.tagName === 'LI') {
        e.target.style.textDecoration = 'line-through';
    }
})


form.addEventListener('submit', function (e) {
    e.preventDefault();
    tasks.innerHTML += '<li>' + value.value + '<button>' + 'Remove' + '</button>' + '</li>';
    
    localStorage.setItem('listItems', tasks.innerHTML)

} )

let itemData = localStorage.getItem('listItems');

if (itemData) {
    tasks.innerHTML = itemData;
}






