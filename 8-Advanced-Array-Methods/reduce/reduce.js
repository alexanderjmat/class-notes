//reduce

//one of the most useful methods
//

const nums = [1, 3, 8, 13, 15, 23, 30];

let min = nums[0];
for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
}

const words = ['yo', 'what', 'is', 'up'];

const wordReduce = words.reduce(function(accum, nextWord){
    return accum + nextWord;
})

const midScores = [67, 69, 79, 60, 83, 88, 91, 98]

const minScore = midScores.reduce(function(min, nextScore) {
    if (nextScore < min) {
        return nextScore;
    }
    return min;
});

const finalScores = [55, 98, 77, 68, 81, 92,]

const minOvr = finalScores.reduce(function(min, nextScore){
    if (nextScore < min) {
        return nextScore
    }
    return min;

}, minScore);