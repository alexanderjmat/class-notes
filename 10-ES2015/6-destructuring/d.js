//Destructuring



//Object destructuring

const pieces = {
    baroque: 'Prelude and Fugue in C', 
    classical: 'Sonata in F', 
    romantic: 'Ballade in Ab', 
    contemporary: 'Gargoyles' 
};

// const baroque = pieces.baroque;
// const classical = pieces.classical;

const {baroque, classical, ...others} = pieces; 

// function hi(...nums) {

// }


//more destructuring objects

const { pop = 'Piano Man'} = pieces;


//Array destructuring

const arr = [1, 2, 3, 4, 5] 

const [one, two] = arr; //an extra comma can be added to skip an index


//function destructuring 

function getTotal([one, two]) {
    return one + two;
}