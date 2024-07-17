//Recursive Function practice with factorial

// 5*4*3*2*1

function factorial(num) {
    if (num == 1) {
        return 1;
    }
    let fac = num * factorial(num - 1);
    return fac;
}

let result = factorial(5);

console.log(result);
