//Object Oriented Programming/Classes



//Intro

//We'll talk about classes, inheritence, instances, constructions, and common OOP terms


//Object review

const color = 'teal';

const obj = {}
obj.color = '#3723FF' //uses 'color' as the key
obj[color] = '#3723FF' //uses 'teal' as the key
//objects return undefined if a non-existent property is called


//Methods review

//A method is a function on an object property 

const add = (x, y) => x + y;
const mult = (x, y) => x * y;
const square = (x) => x * x;
const power = (x, y) => x ** y;

// const myMath = {};
// myMath.add = add;
// myMath.mult = mult;
// myMath.

const myMath = {add, mult, square, power};


//This and methods

function getHypotenuse(a, b) {
    return Math.sqrt(a ** 2 + b ** 2);
}
function getArea(a, b) {
    return a * b / 2;
}

const rightTriangle = {
    a: 9,
    b: 12,
    getArea: function() {
        return this.a * this.b / 2; //this refers to the specific instance of that property within the object
    },
    getHypotenuse: function() {
        this.printThis(); //prints the whole obj
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }
}


//constructor functions

// function Triangle(a, b) {
//     this.a = a;
//     this.b = b;
//     this.getArea = function() {
//         return this.a * this.b / 2;
//     }
//     this.getHypotenuse = function() {
//         return Math.sqrt(this.a ** 2 + this.b ** 2);
//     };
// } //wont return anything

//using new will return unique object 
//calling a function with new creates a blank object and passes the obj as the this context


//Intro to classes

//Classes are blueprints for functionality
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    greet() {
        console.log("HELLO FROM TRIANGLE");
    }
    display() {
        console.log(`Triange with sides of ${this.a} and ${this.b}`); 
    }
    getArea() {
        const {a, b, c} = this;
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }

}

const firstTri = new Triangle(); 
firstTri.a = 3;
firstTri.b = 4;
secondTri.a = 9;
secondTri.b = 12; //these values are added to the object instances, not the class;
//classes create methods that are shared between different object instances


//Adding constructors

//a constructor is a function that accepts input and defines it more specifically
//constructors are also used to validate data
//dont return value from constructor 


//Adding methods


//Extends, inheritance 

//extends gives a new class access to all the properties of another class
//super(constructor parameters) gives a new class access to the constructor of the parent class

