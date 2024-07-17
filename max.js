//Find max of three numbers

let a = 9;
let b = 7;
let c = 5;

//first
if (a >= b) {
    if (a >= c) {
        console.log("Largest Number: ", a);
    } else {
        console.log("Largest Number: ", c);
    }
} else {
    console.log("Largest Number: ", b);
}

//second
if (a >= b && a >= c) {
    console.log("Largest Number " + a);
} else if (b >= a && b >= c) {
    console.log("Largest Number " + b);
} else {
    console.log("Largest Number " + c);
}

//third
let result = Math.max(a, b, c);

console.log("Largest Number " + result);
