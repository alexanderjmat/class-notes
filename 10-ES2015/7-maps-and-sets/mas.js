//Maps and sets



//hash maps

//maps are objects that store any datatype as a key
const myMap = new Map();
myMap.set(7, 'seven');
myMap.set('7', 'seven string');
myMap.set('love', 6);


//map methods

const add = (x, y) => x + y;
const mult = (x, y) => x * y;

const funcCalls = new Map();
funcCalls.set(add, 0)
funcCalls.set(mult, 0);

const chopinBallades = [[1, 'Ballade in G Minor'],
[2, 'Ballade in F Major'],
[3, 'Ballade in Ab Major'],
[4, 'Ballade in F Minor']]

const balladeMap = new Map(chopinBallades);
balladeMap.set(5, 'Ballade in Eb Minor');
balladeMap.delete(5);


//Iterating Maps 

// balladeMap.forEach((val, key) => {
//     console.log(key + '=>' + val);

// })

// for (let [key, value] of balladeMap) {
//     console.log(key, value);
// }


//Sets 

//Sets are array-like structure with no duplicate values
const mySet = new Set([1, 2, 3, 4]);
mySet.add(5).add(6);

function filterSet(tags) {
    const mySet = new Set([1, 2, 3, 4, 5, 6, 7, 8])
    return tags.filter((tag) => !mySet.has(tag));
}

const test = [1, 2, 3, 9, 11];




