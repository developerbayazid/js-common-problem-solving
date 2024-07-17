//Sum all numbers in array

function sumOfArray(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

let result = sumOfArray(30, 20, 43, 42);
console.log(result);
