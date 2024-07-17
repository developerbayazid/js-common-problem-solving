//Finding Max number of array

//first way
const marks = [55, 63, 66, 98, 22, 83, 20, 33, 40];

let max = marks[0];

for (let i = 0; i < marks.length; i++) {
    let result = marks[i];
    if (max < result) {
        max = result;
    }
}
console.log(max);

//2nd way

let result = marks.sort((a, b) => {
    return b - a;
});

let maxNumber = result[0];
console.log(maxNumber);

//3rd way

function findMaxNumber(arr) {
    let result = Math.max(...arr);
    return result;
}

let maxNum = findMaxNumber(marks);
console.log(maxNum);
