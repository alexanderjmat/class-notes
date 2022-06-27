//Object enhancements



//property shorthands

//

const makePerson = (first, last, age) => {
    return {
        first, last, age
    };
}


//Shorthand methods

// const mathStuff = {
//     x: 200,
//     add: function (a, b) {
//         return a + b
//     },
//     square: function(a) {
//         return a ** 2;
//     }
// }

const mathStuff = {
    x: 10,
    add(a, b) {
        return a + b
    },
    square(a) {
        return a * a;
    }
}


//computer property names

//concise way of adding keyname that is a variable
function makeColor(name, hex) {
    return {
        [name]: hex,
        [hex]: name
    };

}