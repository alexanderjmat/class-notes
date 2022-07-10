//this



//this intro

// const composer = {
//     name: 'Chopin',
//     era: 'Romantic',
//     intro: function() {
//         console.log(`Hello, I am ${this.name} and I am from the ${this.era} era.`)
//     }
// };


//this and window object

//when you call a function on nothing in js, you call it on the global object
//whatever is to the left of the period is the object that will be called on
//...global object is the default


//call

//call allows you to pass in an object that the function is called on


//Bind

//bind will set a function to call on a specific object indefinitely
//bind 'perma-binds'

const composer = {
    name: 'Frederic Chopin',
    era: 'Romantic',
    intro: function(name) {
        console.log('THIS IS:', this);
        console.log(`Greetings, ${name}, my name is ${this.name} and I am from the ${this.era} era.`)
    },
    play: function(...pieces) {
        for (let piece of pieces) {
            console.log(`${this.name} loves this ${piece}!`);
        }
    },
    click() {
        alert(`${this.name} hates being clicked!`);
    }
}


//bind arguments 

//binding arguments will make those the hard coded arguments for a given function
const bindRub = composer.intro.bind(composer, 'Rubinstein'); //calling bindRub will always return with the argument 'Rubinstein' on composer

//using null as the first parameter of a bind will bind the function to no particular object

function salesTax(rate, price) {
    return price + price * rate;
}

const caliTax = salesTax.bind(null, 0.0725)
const texasTax = salesTax.bind(null, 0.0625)


const bobMember = {
    name: 'Bob',
    total: 250
    // collectFee: function(fee) {
    //     const remaining = this.total - fee;
    //     this.total = remaining;
    //     return this.name + 'remaining balance:' + remaining;
    // }
}
const jillMember = {
    name: 'Jill', 
    total: 899
}

function collectFee(fee) {
    const remaining = this.total - fee;
    this.total = remaining;
    return this.name + 'remaining balance:' + remaining;
}

const collectBob = collectFee.bind(bobMember, 5)
const collectJill = collectFee.bind(jillMember, 35)


//binding callbacks

//must bind for callbacks 
document.querySelector('#btn-1').addEventListener('click', composer.click.bind(composer));

const a = document.querySelector('#a')
const b = document.querySelector('#b')
const c = document.querySelector('#c')

function popUp(msg) {
    alert("Secret message is " + msg);
}

a.addEventListener('click', popUp.bind(null, 'A says hi'))
b.addEventListener('click', popUp.bind(null, 'B says hi'))
c.addEventListener('click', popUp.bind(null, 'C says hi'))


//this and arrow functions

const greeter = {
    msg: 'I like chickens',
    sayHi: () => {
        alert(this.msg); //returns undefined
    }
}

//arrow functions don't return a unique this unless they are a callback
//callback functions always need to be bounded to the object you want to use it for