//Rest / spread operator



//The arguments object

//

// function max() {
//     console.log(arguments);
// }

// function sum() {
//     arguments.reduce((sum, val) => {
//         return sum + val;
//     })
// }

const max =  function() {
   const argArr = Array.from(arguments);
   const reduced = argArr.reduce((accum, val) => {
    if (val > accum) {
        return val;
    }
    return accum;
   })
   return reduced;
}


//rest operator

//the rest operator creates an array to collect any arguments passed into the function

function sum(...nums) {
    return nums.reduce((sum, n) => sum + n);
}

function makeFam(parent1, parent2, ...kids) {
    return {
        parents: [parent1, parent2],
        children: kids.length ? kids : 0
    }
}

function filterByType(type, ...values) {
    return values.filter(val => {
        return typeof val == type;
    })
}


//spread operator

//the spread operator is declared inside of a function call, array, or object
//

function testSpread(...rest) {
    return rest;
}

const arr = [1, 2, 3, 4]; 


//spread array literals

const colors = ['red', 'blue', 'yellow', 'green', 'purple']
const colorsCopy = [...colors, 'violet', 'orange'];


//spread object literals

const piece = {
    title: 'Ballade in F Minor, Op.52',
    composer: 'Frederic Chopin', 
    instrument: 'Piano'
}

// const piece2 = {...piece};
const pieceEra = {...piece, era: 'romantic'}


//spread and deep copies

//using spread to copy nested data structures doesnt create a new nested structure. they share the same reference
//deep copies are not easy to make 