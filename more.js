// fibonacci

const fibonacciRecursive = (num) => {
    if (num == 0) {
        return [1];
    }
    if (num == 1) {
        return [1, 1];
    }
    let fibo = fibonacciRecursive(num - 1);
    let nextElement = fibo[num - 1] + fibo[num - 2];
    fibo.push(nextElement);
    return fibo;
};

let result = fibonacciRecursive(5);
console.log(result);
