//Advanced Array Methods

//Callback function review 

function holler() {
    console.log("HEY");
}

const whisper = function() {
    console.log('suppppp')
}

function add(x, y) {
    return x + y
}
function subtract(x, y) {
    return x - y
}
function multiply(x, y) {
    return x * y
}
function divide(x, y) {
    return x / y
}

const mathFuncs = [add, subtract, multiply, divide]
mathFuncs[3](4, 2)

function doMath(a, b, mathFunc) {
    return mathFunc(a, b);
}

function doAllMath(a, b, mathFuncs) { 
    for (let func of mathFuncs) {
        console.log(func(a, b));
    }
}


//forEach

const colors = ['teal', 'cyan', 'peach', 'purple']

function yell(val, i) {
    const caps = val.toUpperCase()
    // console.log(`At index ${i}, ${caps}`)
}

colors.forEach(yell);

const prices = [60, 34, 7, 22, 100]
let total = 0
prices.forEach(function(price) {
    total += price;
})

// console.log(total);

function values(value, index) {
    // console.log(value, index);
};


function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i)
    }
    return undefined;
}

myForEach([4, 5, 6], values);



//Map


//Map is really useful
//Map creates a new array, iterates through current array, 
//..runs callback for each value in arr, 
//..adds result of callback to the new array, 
//..and returns the new array
//Length of returned array will always be the same as original

const num = [21, 37, 64, 99, 142]

const neg = num.map(function(val) {
    return val * -1;
})

const todo = [
    {
    id : 1, 
    text: 'walk dog',
    priority: 'high'
    }, 
    {
    id : 2, 
    text: 'walk chickens',
    priority: 'medium'
    }, 
    {
    id : 3, 
    text: 'feed cats',
    priority: 'low'
    }, 
    {
    id : 4, 
    text: 'put out fire',
    priority: 'very high'
    }
]

const text = todo.map(function(val) {
    return val.text;
})

const links = Array.from(document.querySelectorAll('a'));

const urls = links.map(function(a) {
    return a.href;
})

function myMap(arr, callback){
    const mappedArr = []
    for (let i = 0; i < arr.length; i++) {
        const val = callback(arr[i], i, arr)
        mappedArr.push(val);
    }

    return mappedArr
}

const priorityMap = myMap(todo, function(todo) {
    return todo.priority;
})

const repeat = myMap(['a', 'b', 'c', 'd', 'e'], function(str, idx) {
    return str.repeat(idx);
})


//Filter creates a new array that is filtered based on a condition

const words = ['ksahdkjashdkjas', 'sdjs', 'sk', 'hfigfiysdgfksgfuod', 'fhdksf']

const shortWords = words.filter(function(word) {
    return word.length < 10;
})

const wordsKS = words.filter(function(word) {
    return word[0] === 'k' || word[0] === 's';
})

const containsVowel = function(word) {
    for (let char of word) {
        if(isVowel(char)) return true;
    }
    return false;
}

const isVowel = function(char) {
   return ('aeiou'.indexOf(char) !== -1);
}


//Map and filter

const allCheckboxes = document.querySelectorAll('input[type="checkbox"]')
arr = Array.from(allCheckboxes);

const checked = arr.filter(function(box) {
    return box.checked;
})

const checkText = checked.map(function(checkbox) {
    return checkbox.parentElement.innerText;
})

function extractCompletedTodos() {
    let allCheckboxes = document.querySelectorAll('input[type="checkbox"]')
    return Array.from(allCheckboxes).filter(function(box) {
        return box.checked;
    }).map(function(checkbox) {
        return checkbox.parentElement.innerText;
    })

}


function myFilter(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            newArr.push(arr[i]);
            callback(newArr[i], i, newArr);
        }
    }
    return newArr;

}

function cb(value, index, arr) {
    return arr;
}

const test = myFilter([1, 2, 5, 5, 6, 5, 3, 5], cb);