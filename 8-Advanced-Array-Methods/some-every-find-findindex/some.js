//Some and every

//some iterates thru an array, runs callback on each value, and if
//...callback returns true for at least one value, it returns true

//every iterates thru an array, runs callback on each value, and if
//...callback returns true for all values, it returns true

const words = ['wow', 'sus', 'funny', 'hate']

// const some = words.some(function(word) {
//     return word.length < 5;
// });

const someWords = words.some(function(word) {
    return word.indexOf('bad') !== -1;
});


const every = words.every(function(word) {
    return word.length > 2;
})

const everyWord = words.every(function(word) {
    return typeof word === 'string'
})




function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr) == true) {
            return true;
        };
    }
    return false; 
}

const test = some([1, 2, 3, 4, 5], function(value) {
    return value > 6;
})