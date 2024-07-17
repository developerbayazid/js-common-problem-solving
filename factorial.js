function leapYear(year) {
    if (year % 4 == 0 && year % 100 != 0) {
        console.log(year + " is a leap year");
    } else if (year % 400 == 0) {
        console.log(year + " is a leap year");
    } else {
        console.log(year + " is not a leap year");
    }
}

leapYear(1700);

function factorial(fac) {
    let result = 1;
    for (let i = 1; i <= fac; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(4)); //1*2*3*4 = 24

function findFactorial(num) {
    if (num === 0) return 1;
    let factorial = num * findFactorial(num - 1);
    return factorial;
}

console.log(findFactorial(5)); // 120
