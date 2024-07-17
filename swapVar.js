//Variable Swapping

let a = 9;
let b = 15;
console.log("Before Swapping ", "a = ", a, "b= ", b);
let temp = a;

a = b;
b = temp;

console.log("After Swapping ", "a = ", a, "b= ", b);

let x = 8;
let y = 5;
console.log("Before Swapping ", "x = ", x, "y= ", y);
x = x + y;
y = x - y;
x = x - y;
console.log("After Swapping ", "x = ", x, "y= ", y);

let p = 5;
let q = 7;
console.log("Before Swapping ", "p = ", p, "q= ", q);
[p, q] = [q, p];
console.log("After Swapping ", "p = ", p, "q= ", q);
