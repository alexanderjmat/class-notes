//Arrow functions



//Intro to arrow functions

//Arrow functions are great for shortening callback functions
//not a replacement for function syntax in general
//arrow functions replace function expressions but not function declarations

const add = (x, y) => {
    return x + y;
}

[1, 2, 3, 2, 5, 7, 4, 9, 8].reduce((max, currNum) => {
    return Math.max(max, currNum);

});


[1, 2, 3, 4, 5].filter(num => num % 2 === 0);

const double = n => n * 2;
//this only works if there's one expression in the body of your function

const doMath = num => {
    return {
        square: num * num,
        double: num * 2
    };
};

//to add a method to an object, it's best to use a regular function expression. 

//babel js refactors es2015 code so that it works in internet explorer